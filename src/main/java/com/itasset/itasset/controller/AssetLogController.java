package com.itasset.itasset.controller;

import com.itasset.itasset.model.AssetLog;
import com.itasset.itasset.repository.AssetLogRepository;

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
public class AssetLogController {
    @Autowired
    private AssetLogRepository assetlogrepository;

    @GetMapping("/assetlog")
    Collection <AssetLog> assetlog(){
        return assetlogrepository.findAll();
    }

    @GetMapping("/assetlog/{id}")
    ResponseEntity<?> getAssetLog(@PathVariable Integer id){
      Optional<AssetLog> assetlog = assetlogrepository.findById(id);
      return assetlog.map(response -> ResponseEntity.ok().body(response))
          .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}