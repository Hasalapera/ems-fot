package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "registration_form_fields")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class RegistrationFormField {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    private String fieldName; // e.g., "T-Shirt Size"
    private String fieldType; // TEXT, NUMBER, DROP_DOWN
    private boolean isRequired = true;
}