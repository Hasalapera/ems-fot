package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "resource_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResourceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = true) // ඉවෙන්ට් එකක් නැතිව වුණත් බඩු ගන්න පුළුවන්
    private Event event;

    @ManyToOne
    @JoinColumn(name = "requester_id")
    private User requester;

    @Column(columnDefinition = "TEXT")
    private String purpose;

    private LocalDate requestedDate;

    @Enumerated(EnumType.STRING)
    private RequestStatus status = RequestStatus.PENDING;

    @OneToMany(mappedBy = "request", cascade = CascadeType.ALL)
    private List<ResourceRequestItem> items;
}

