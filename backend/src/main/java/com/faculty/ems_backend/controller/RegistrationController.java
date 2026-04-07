package com.faculty.ems_backend.controller;

import com.faculty.ems_backend.model.Registration;
import com.faculty.ems_backend.model.RegistrationFieldResponse;
import com.faculty.ems_backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:5173") // For React (Vite)
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    // 1. Register a student for an event
    @PostMapping("/event/{eventId}")
    public ResponseEntity<Registration> register(
            @PathVariable Long eventId,
            @RequestBody RegistrationRequestWrapper requestWrapper) {

        Registration savedReg = registrationService.registerUser(
                eventId,
                requestWrapper.getRegistration(),
                requestWrapper.getResponses()
        );
        return ResponseEntity.ok(savedReg);
    }

    // 2. Mark attendance using QR Code UUID
    @PutMapping("/mark-attendance/{qrUuid}")
    public ResponseEntity<Registration> markAttendance(@PathVariable String qrUuid) {
        Registration updatedReg = registrationService.markAttendance(qrUuid);
        return ResponseEntity.ok(updatedReg);
    }
}

// Wrapper class to receive both Registration and Custom Responses in one JSON
class RegistrationRequestWrapper {
    private Registration registration;
    private List<RegistrationFieldResponse> responses;

    public Registration getRegistration() { return registration; }
    public List<RegistrationFieldResponse> getResponses() { return responses; }
}