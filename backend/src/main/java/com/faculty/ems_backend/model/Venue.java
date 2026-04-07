package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "venues")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // උදා: "Main Auditorium", "Faculty Playground"

    private String location; // පීඨයේ පිහිටීම (Ex: Near ICT Building)

    @Enumerated(EnumType.STRING)
    private VenueType type; // INDOOR, OUTDOOR

    private Integer maxCapacity; // දරාගත හැකි උපරිම පිරිස (Outdoor නම් NULL විය හැක)

    private String description;

    // මෙම ස්ථානයේ පවත්වන සියලුම ඉවෙන්ට්ස් ලැයිස්තුව
    @OneToMany(mappedBy = "venue")
    private List<Event> events;
}


