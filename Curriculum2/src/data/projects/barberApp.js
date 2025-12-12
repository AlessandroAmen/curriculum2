export const barberAppData = {
  id: 1,
  title: "Barber Appointment Booking App",
  slug: "barber-app",
  description: "App mobile completa per prenotazione appuntamenti dal barbiere, con backend Laravel e database TiDB",
  technologies: ["React Native", "Laravel", "TiDB", "PHP", "JavaScript"],
  category: "fullstack",
  image: "/barberappsfondo.png",
  frontendLink: "https://github.com/AlessandroAmen/frontend-barbierapp",
  backendLink: "https://github.com/AlessandroAmen/backend-backend-barbiere",
  liveLink: null,
  features: [
    "Login e registrazione utenti",
    "Selezione barbiere e negozio",
    "Calendario con slot disponibili", 
    "Pannello admin per gestione ruoli"
  ],
  detailedDescription: `App mobile demo sviluppata con React Native e Laravel per dimostrare le mie competenze nello sviluppo mobile e backend. Permette agli utenti di prenotare appuntamenti con barbieri locali attraverso un'interfaccia intuitiva.

Video demo: https://www.linkedin.com/posts/alessandro-amenta-940227354_demo-project-barber-appointment-booking-activity-7333482719865212928-ceVR`,
  objective: "Dimostrare le mie competenze di coding nell'sviluppo di applicazioni mobile e backend",
  note: "Primo progetto React Native - il codice può essere migliorato seguendo best practices",
  
  screenshots: [
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Schermata di login dell'app",
      alt: "Login screen"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Selezione barbiere e orari disponibili",
      alt: "Barber selection"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Calendario prenotazioni",
      alt: "Booking calendar"
    }
  ],
  
  videos: [
    {
      url: "#",
      title: "Demo completa dell'app",
      description: "Video che mostra tutte le funzionalità principali"
    }
  ],
  
  codeSnippets: [
    {
      title: "User Authentication - Laravel Backend",
      language: "php",
      code: `<?php

namespace App\\Http\\Controllers\\Auth;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status' => 'success',
            'user' => $user,
            'token' => $user->createToken('authToken')->plainTextToken
        ], 201);
    }
}`
    },
    {
      title: "Booking Component - React Native Frontend",
      language: "javascript",
      code: `import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingScreen = ({ navigation, route }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);
  const { barberId, date } = route.params;

  useEffect(() => {
    fetchAvailableSlots();
  }, []);

  const fetchAvailableSlots = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await fetch(\`\${API_URL}/api/barbers/\${barberId}/available-slots?date=\${date}\`, {
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      setAvailableSlots(data.slots);
    } catch (error) {
      Alert.alert('Errore', 'Impossibile caricare gli orari disponibili');
    } finally {
      setLoading(false);
    }
  };

  const bookAppointment = async () => {
    if (!selectedSlot) {
      Alert.alert('Attenzione', 'Seleziona un orario');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await fetch(\`\${API_URL}/api/appointments\`, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          barber_id: barberId,
          date: date,
          time: selectedSlot.time,
        }),
      });

      if (response.ok) {
        Alert.alert('Successo', 'Appuntamento prenotato!', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      }
    } catch (error) {
      Alert.alert('Errore', 'Impossibile prenotare l\\'appuntamento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orari Disponibili</Text>
      <FlatList
        data={availableSlots}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slotItem,
              selectedSlot?.id === item.id && styles.selectedSlot
            ]}
            onPress={() => setSelectedSlot(item)}
          >
            <Text style={styles.slotText}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.bookButton} onPress={bookAppointment}>
        <Text style={styles.bookButtonText}>Prenota Appuntamento</Text>
      </TouchableOpacity>
    </View>
  );
};`
    }
  ],
  
  challenges: [
    "Prima esperienza con React Native - curva di apprendimento",
    "Integrazione tra frontend mobile e backend API",
    "Gestione dello stato utente e autenticazione",
    "Design responsive per diverse dimensioni schermo"
  ],
  
  learnings: [
    "Sviluppo mobile con React Native",
    "API RESTful con Laravel",
    "Integrazione con database TiDB",
    "Gestione autenticazione e autorizzazione"
  ]
};