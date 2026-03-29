package com.faculty.ems_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "resource_request_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResourceRequestItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // මෙම අයිතමය අයිති වන ප්‍රධාන ඉල්ලීම (Request)
    @ManyToOne
    @JoinColumn(name = "request_id")
    private ResourceRequest request;

    // ඉල්ලනු ලබන නිශ්චිත සම්පත (Resource - උදා: Projector)
    @ManyToOne
    @JoinColumn(name = "resource_id")
    private Resource resource;

    @Column(nullable = false)
    private Integer quantity; // ඉල්ලන ප්‍රමාණය
}