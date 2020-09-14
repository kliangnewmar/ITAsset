package com.itasset.itasset.controller;

import com.itasset.itasset.model.Asset;
import com.itasset.itasset.repository.AssetRepository;

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
public class AssetController {

    @Autowired
    private AssetRepository assetrepository;

    @GetMapping("/asset")
    Collection <Asset> asset(){
        return assetrepository.findAll();
    }

    @GetMapping("/asset/{id}")
    ResponseEntity<?> getAsset(@PathVariable Integer id){
      Optional<Asset> asset = assetrepository.findById(id);
      return asset.map(response -> ResponseEntity.ok().body(response))
          .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
}