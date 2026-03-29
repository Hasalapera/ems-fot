package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "events")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private LocalDate eventDate;

    private String proposalUrl; // PDF එක තියෙන තැන (Path)

    @Enumerated(EnumType.STRING)
    private TargetAudience targetAudience;

    @Enumerated(EnumType.STRING)
    private EventStatus status = EventStatus.PENDING;

    private boolean needsHodApproval = false; // HOD අනුමැතිය අවශ්‍යද නැද්ද යන්න

    // ඉවෙන්ට් එක පවත්වන ස්ථානය
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    // ඉවෙන්ට් එක පවත්වන සංවිධානය (Club/Batch)
    @ManyToOne
    @JoinColumn(name = "org_id")
    private Organization organization;

    // ඉවෙන්ට් එක භාර සම්බන්ධීකාරක (Student/Lecturer)
    @ManyToOne
    @JoinColumn(name = "coordinator_id")
    private User coordinator;
}


