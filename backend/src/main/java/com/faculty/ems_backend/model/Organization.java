package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "organizations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // උදා: "ICT Club", "7th Batch"

    @Enumerated(EnumType.STRING)
    private OrgType type; // CLUB, BATCH, OFFICE

    // මෙම සංවිධානයට අදාළ තනතුරු දරන පිරිස (Senior Treasurer, President, etc.)
    @OneToMany(mappedBy = "organization")
    private List<UserPosition> positions;

    // මෙම සංවිධානය මඟින් පවත්වන ඉවෙන්ට්ස්
    @OneToMany(mappedBy = "organization")
    private List<Event> events;
}

