import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

/**
 * User APIs
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Quiz APIs
 */
export const fetchQuiz = async (quizId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz:', error.response?.data || error.message);
    throw error;
  }
};

export const createQuiz = async (quizData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/quizzes/create`, quizData);
    return response.data;
  } catch (error) {
    console.error('Error creating quiz:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Result APIs
 */
export const submitResult = async (resultData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/results/submit`, resultData);
    return response.data;
  } catch (error) {
    console.error('Error submitting result:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/results/leaderboard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error.response?.data || error.message);
    throw error;
  }
};
