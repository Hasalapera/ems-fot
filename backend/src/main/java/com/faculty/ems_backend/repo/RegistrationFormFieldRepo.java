package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.RegistrationFormField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RegistrationFormFieldRepo extends JpaRepository<RegistrationFormField, Long> {

    // යම් නිශ්චිත ඉවෙන්ට් එකකට අදාළ සියලුම Form Fields ලබා ගැනීමට
    List<RegistrationFormField> findByEventId(Long eventId);
}