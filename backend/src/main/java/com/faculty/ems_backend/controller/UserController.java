package com.faculty.ems_backend.controller;

import com.faculty.ems_backend.model.User;
import com.faculty.ems_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // React වලට අවසර දීමට
public class UserController {

    @Autowired
    private UserRepo userRepository;

    // පද්ධතියේ ඉන්න සියලුම Users ලා බැලීමට
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // අලුත් User කෙනෙක් ඇතුළත් කිරීමට
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}