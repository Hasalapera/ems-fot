package com.faculty.ems_backend.service;

import com.faculty.ems_backend.model.*;
import com.faculty.ems_backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepo registrationRepo;

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private RegistrationFieldResponseRepo responseRepo;

    @Transactional
    public Registration registerUser(Long eventId, Registration registration, List<RegistrationFieldResponse> responses) {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        // Check if event capacity is full
        if (event.getMaxCapacity() != null) {
            long currentRegs = registrationRepo.findByEventId(eventId).size();
            if (currentRegs >= event.getMaxCapacity()) {
                throw new RuntimeException("Event capacity reached!");
            }
        }

        // Generate a unique QR Code UUID
        registration.setQrCodeUuid(UUID.randomUUID().toString());
        registration.setEvent(event);
        registration.setAttendanceStatus("ABSENT");

        Registration savedReg = registrationRepo.save(registration);

        // Save custom form responses (T-shirt size, etc.)
        for (RegistrationFieldResponse resp : responses) {
            resp.setRegistration(savedReg);
            responseRepo.save(resp);
        }

        return savedReg;
    }

    public Registration markAttendance(String qrUuid) {
        Registration reg = registrationRepo.findByQrCodeUuid(qrUuid)
                .orElseThrow(() -> new RuntimeException("Invalid QR Code"));

        reg.setAttendanceStatus("PRESENT");
        return registrationRepo.save(reg);
    }
}