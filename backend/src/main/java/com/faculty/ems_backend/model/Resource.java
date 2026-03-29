package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "resources")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String itemName; // උදා: "Projector", "Teak Tree"

    @Enumerated(EnumType.STRING)
    private ResourceType type; // EQUIPMENT, NATURAL_ASSET

    private Integer totalQuantity;
    private Integer availableQuantity;

    @OneToMany(mappedBy = "resource")
    private List<ResourceRequestItem> requestItems;
}

enum ResourceType {
    EQUIPMENT, NATURAL_ASSET
}