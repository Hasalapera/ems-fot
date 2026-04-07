package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "registrations")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    private String fullNameGuest; // For external participants
    private String emailGuest;

    @Column(unique = true)
    private String qrCodeUuid;

    private String attendanceStatus = "ABSENT"; // PRESENT or ABSENT
    private LocalDateTime registeredAt = LocalDateTime.now();
}