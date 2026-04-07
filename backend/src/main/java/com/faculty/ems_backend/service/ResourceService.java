package com.faculty.ems_backend.service;

import com.faculty.ems_backend.model.*;
import com.faculty.ems_backend.repo.ResourceRepo;
import com.faculty.ems_backend.repo.ResourceRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepo resourceRepo;

    @Autowired
    private ResourceRequestRepo requestRepo;

    // Approve a resource request and update the available quantity
    public ResourceRequest approveRequest(Long requestId) {
        ResourceRequest request = requestRepo.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        request.setStatus(RequestStatus.AR_APPROVED);

        // Logic to decrease inventory for each item in the request
        for (ResourceRequestItem item : request.getItems()) {
            Resource res = item.getResource();
            if (res.getAvailableQuantity() < item.getQuantity()) {
                throw new RuntimeException("Not enough items in stock: " + res.getItemName());
            }
            res.setAvailableQuantity(res.getAvailableQuantity() - item.getQuantity());
            resourceRepo.save(res);
        }

        return requestRepo.save(request);
    }
}