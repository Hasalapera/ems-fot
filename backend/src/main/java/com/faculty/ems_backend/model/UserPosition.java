package com.faculty.ems_backend.model;

import jakarta.persistence.*;

@Entity
public class UserPosition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Designation designation; // DEAN, HOD, SENIOR_TREASURER, STUDENT_COUNSELLOR

    @ManyToOne
    @JoinColumn(name = "org_id")
    private Organization organization; // Club එකක් හෝ Batch එකක් (HOD/Dean නම් NULL විය හැක)

    private String academicYear;
    private boolean isActive = true; // මේකෙන් තමයි මේ අවුරුද්දේ තනතුර තියෙනවාද බලන්නේ
}


