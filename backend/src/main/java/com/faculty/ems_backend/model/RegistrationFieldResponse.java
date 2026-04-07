package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "registration_field_responses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistrationFieldResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 1. මේ උත්තරය අයිති වන ලියාපදිංචිය (Registration)
    @ManyToOne
    @JoinColumn(name = "registration_id")
    private Registration registration;

    // 2. මේ උත්තරය අදාළ වන ප්‍රශ්නය (Field - e.g., T-Shirt Size)
    @ManyToOne
    @JoinColumn(name = "field_id")
    private RegistrationFormField formField;

    // 3. ශිෂ්‍යයා ලබාදුන් පිළිතුර (e.g., "XL", "Vegetarian")
    @Column(columnDefinition = "TEXT")
    private String responseValue;
}