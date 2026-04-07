package com.faculty.ems_backend.service;

import com.faculty.ems_backend.model.*;
import com.faculty.ems_backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;

    // 1. අලුත් ඉවෙන්ට් එකක් සබ්මිට් කිරීම
    public Event createEventRequest(Event event) {
        // මූලිකවම status එක PENDING ලෙස සකස් කිරීම
        event.setStatus(EventStatus.PENDING);

        // Logic: ඉවෙන්ට් එකේ targetAudience එක අනුව HOD අනුමැතිය අවශ්‍යදැයි බැලීම
        if (event.getTargetAudience() == TargetAudience.ONLY_BATCH) {
            event.setNeedsHodApproval(true);
        }

        return eventRepo.save(event);
    }

    // 2. අනුමත කිරීමේ පියවර (Approval Logic)
    public Event approveEvent(Long eventId, UserRole reviewerRole) {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        // පියවර 1: HOD අනුමැතිය අවශ්‍ය නම් මුලින්ම ඔහු අනුමත කළ යුතුයි
        if (event.isNeedsHodApproval() && reviewerRole == UserRole.LECTURER) {
            // මෙතනදී අපි හිතමු HOD කියන්නෙත් Lecturer රෝල් එකේ ඉන්න කෙනෙක් කියලා
            event.setStatus(EventStatus.PENDING); // තවම සම්පූර්ණ නැත
            System.out.println("HOD Approved. Waiting for Dean/AR...");
        }

        // පියවර 2: අවසන් අනුමැතිය (Dean හෝ AR විසින්)
        if (reviewerRole == UserRole.AR || reviewerRole == UserRole.ADMIN) {
            event.setStatus(EventStatus.APPROVED);
        }

        return eventRepo.save(event);
    }
}