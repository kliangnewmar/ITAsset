package com.itasset.itasset.controller;

import com.itasset.itasset.model.AssetClass;
import com.itasset.itasset.repository.AssetClassRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.Optional;
import org.springframework.http.HttpStatus;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AssetClassController {
    
    @Autowired
    private AssetClassRepository assetclassrepository;

    @GetMapping("/assetclass")
    Collection <AssetClass> assetclass(){
        return assetclassrepository.findAll();
    }

    @GetMapping("/assetclass/{id}")
    ResponseEntity<?> getAssetClass(@PathVariable Integer id){
      Optional<AssetClass> assetclass = assetclassrepository.findById(id);
      return assetclass.map(response -> ResponseEntity.ok().body(response))
          .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}