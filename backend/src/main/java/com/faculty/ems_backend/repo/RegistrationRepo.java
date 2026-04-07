package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface RegistrationRepo extends JpaRepository<Registration, Long> {

    // 1. ඉවෙන්ට් එකකට ලියාපදිංචි වූ සියලුම දෙනා සෙවීමට
    List<Registration> findByEventId(Long eventId);

    // 2. QR Code එක මඟින් ලියාපදිංචිය තහවුරු කිරීමට (Attendance සඳහා)
    Optional<Registration> findByQrCodeUuid(String qrCodeUuid);

    // 3. යම් ශිෂ්‍යයෙක් දැනටමත් ලියාපදිංචි වී ඇත්දැයි බැලීමට (Email එකෙන්)
    boolean existsByEventIdAndEmailGuest(Long eventId, String email);
}