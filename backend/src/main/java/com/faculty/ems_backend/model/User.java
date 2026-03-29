package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;

// මෙන්න මේ import එක තමයි අඩුවෙලා තියෙන්නේ
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role; // STUDENT, LECTURER, AR, ADMIN

    // List එක පාවිච්චි කරන තැන
    @OneToMany(mappedBy = "user")
    private List<UserPosition> activePositions;
}