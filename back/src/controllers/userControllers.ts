import { Request, Response } from 'express';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import User from '../models/userModels';

// Constante pour le secret JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Enregistrement d'un nouvel utilisateur
export const register = async (req: Request, res: Response) => {
  try {
    // Récupération des données de l'utilisateur à partir de la requête
    const { username, name, lastname, email, password, confirmPassword } = req.body;

    // Vérifiez que les mots de passe sont identiques
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Vérification si l'utilisateur avec l'adresse e-mail existe déjà
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Vérification si l'utilisateur avec le nom d'utilisateur existe déjà
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ message: 'User with this username already exists' });
    }

    // Validation du mot de passe avec regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number.',
      });
    }

    // Hachage du mot de passe
    const hashedPassword = await argon2.hash(password);

    // Création du nouvel utilisateur
    const newUser = new User({
      username,
      name,
      lastname,
      email,
      password: hashedPassword,
    });

    // Sauvegarde de l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    // Création du token JWT
    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET!, {
      expiresIn: '1d',
    });

    // Envoi de la réponse avec le token JWT
    res.status(201).json({ message: 'New user created succesfully', token });
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Connexion d'un utilisateur existant
export const login = async (req: Request, res: Response) => {
  try {
    // Récupération des données de connexion à partir de la requête
    const { email, password } = req.body;

    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Vérification du mot de passe
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Création du token JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET!, {
      expiresIn: '1d',
    });

    // Envoi de la réponse avec le token JWT
    res.status(200).json({ message: 'User Logged In', token });
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Récupération de tous les utilisateurs
export const getAllUsers = async (_: Request, res: Response) => {
  try {
    // Recherche de tous les utilisateurs dans la base de données
    const users = await User.find({});

    // Envoi de la réponse avec la liste des utilisateurs
    res.status(200).json(users);
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Récupération d'un utilisateur par son ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    // Récupération de l'ID de l'utilisateur à partir de la requête
    const { id } = req.params;

    // Recherche de l'utilisateur dans la base de données
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Envoi de la réponse avec les données de l'utilisateur
    res.status(200).json(user);
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Mise à jour d'un utilisateur par son ID
export const updateUserById = async (req: Request, res: Response) => {
  try {
    // Récupération de l'ID de l'utilisateur à partir de la requête
    const { id } = req.params;

    // Récupération des données de l'utilisateur à partir de la requête
    const { username, name, lastname, email, password, confirmNewPassword } = req.body;

    // Recherche de l'utilisateur dans la base de données
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mise à jour des données de l'utilisateur
    if (username) user.username = username;
    if (name) user.name = name;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;

    // Si un nouveau mot de passe est fourni, vérifier qu'il correspond au mot de passe confirmé,
    // le hacher et le mettre à jour
    if (password) {
      if (password !== confirmNewPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message:
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number.',
        });
      }
      user.password = await argon2.hash(password);
    }

    // Sauvegarde des modifications dans la base de données
    const updatedUser = await user.save();

    // Envoi de la réponse avec les données de l'utilisateur mis à jour
    res.status(200).json(updatedUser);
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Suppression d'un utilisateur par son ID
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    // Récupération de l'ID de l'utilisateur à partir de la requête
    const { id } = req.params;

    // Recherche et suppression de l'utilisateur dans la base de données
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Envoi de la réponse avec un message de confirmation
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Something went wrong' });
  }
};