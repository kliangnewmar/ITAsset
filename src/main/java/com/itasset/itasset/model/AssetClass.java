package com.itasset.itasset.model;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name="asset_class")
public class AssetClass {
    
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(columnDefinition = "int(10) unsigned")
  private Integer id;

  @Column(nullable = false, length = 40)
  private String class_name;

  @Column(nullable = false,columnDefinition = "tinyint(1) unsigned")
  private int active;

  @Column(nullable = false,columnDefinition = "int(11)")
  private Integer image_id;

}