package com.EM.EduMedia.Controller;

import com.EM.EduMedia.Model.School;
import com.EM.EduMedia.Service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/schools")
public class SchoolController {

    @Autowired
    private SchoolService schoolService;

    @GetMapping
    public ResponseEntity<List<School>> getSchools() {
        List<School> schools = schoolService.findAllSchools();
        return ResponseEntity.ok(schools);
    }
}
