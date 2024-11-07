package com.StyleUp.backend.models;

import jakarta.persistence.*;
import java.lang.*;
import java.util.*;

@Entity
@Table (name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rm_id;

    @Column
    private String roomName;

    @OneToMany (cascade = CascadeType.ALL)//declares that one room can have many decorations, updates everything when one is saved
    /*The @JoinColumn annotation combined with a @OneToOne mapping indicates that a given column in the owner entity
    refers to a primary key in the reference entity*/
    @JoinColumn (name = "rm_id", referencedColumnName = "rm_id")
    private List<Decoration> decorations;

    public Room() {}

    public Room(String roomName) {
        this.roomName = roomName;
    }

}
