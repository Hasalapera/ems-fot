package com.faculty.ems_backend.controller;

import com.faculty.ems_backend.model.Event;
import com.faculty.ems_backend.model.RegistrationFormField;
import com.faculty.ems_backend.model.UserRole;
import com.faculty.ems_backend.repo.RegistrationFormFieldRepo;
import com.faculty.ems_backend.service.EventService;
import com.faculty.ems_backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173") // Vite පාවිච්චි කරන නිසා සාමාන්‍යයෙන් port එක 5173 වේ
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private EventRepo eventRepo;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event savedEvent = eventService.createEventRequest(event);
        return ResponseEntity.ok(savedEvent);
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Event> approveEvent(
            @PathVariable Long id,
            @RequestParam UserRole reviewerRole) {
        Event approvedEvent = eventService.approveEvent(id, reviewerRole);
        return ResponseEntity.ok(approvedEvent);
    }

    @Autowired
    private RegistrationFormFieldRepo fieldRepo;

    // Add a custom registration field to an event (e.g., T-Shirt Size)
    @PostMapping("/{eventId}/fields")
    public ResponseEntity<RegistrationFormField> addFieldToEvent(
            @PathVariable Long eventId,
            @RequestBody RegistrationFormField field) {

        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        field.setEvent(event);
        return ResponseEntity.ok(fieldRepo.save(field));
    }
}