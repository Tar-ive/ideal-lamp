'use client'

import React, { useState, useEffect } from 'react';
import { Activity, AlertCircle, Heart, Droplets, Clock } from 'lucide-react';

const BloodAssessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "What is your blood type?",
      options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Don't know"]
    },
    {
      id: 2,
      text: "Have you ever received a blood transfusion?",
      options: ["Yes", "No", "Not sure"]
    },
    {
      id: 3,
      text: "When was your last blood donation?",
      options: ["Never", "Within 3 months", "3-6 months ago", "6-12 months ago", "Over a year ago"]
    },
    {
      id: 4,
      text: "Do you have any blood-related medical conditions?",
      options: ["Yes", "No", "Not sure"]
    },
    {
      id: 5,
      text: "Are you currently taking blood thinners?",
      options: ["Yes", "No", "Not sure"]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue >= 100) {
        clearInterval(interval);
        setShowResults(true);
        return;
      }
      progressValue += 2;
      setProgress(progressValue);
    }, 300);
  };

  const ResultsView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="text-red-500" />
            <h3 className="text-lg font-semibold">Blood Type Profile</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">Your Blood Type: {answers[1]}</p>
            <p className="text-gray-700">Can donate to: {getCompatibleTypes(answers[1])}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Droplets className="text-blue-500" />
            <h3 className="text-lg font-semibold">Donation Status</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">Last Donation: {answers[3]}</p>
            <p className="text-gray-700">Next Eligible: {getNextEligibleDate(answers[3])}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="text-yellow-500" />
          <h3 className="text-lg font-semibold">Medical Considerations</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-700">Blood Thinners: {answers[5]}</p>
          <p className="text-gray-700">Medical Conditions: {answers[4]}</p>
          <p className="text-gray-700">Previous Transfusion: {answers[2]}</p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button 
          onClick={() => {
            setStep(0);
            setAnswers({});
            setLoading(false);
            setProgress(0);
            setShowResults(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Start New Assessment
        </button>
      </div>
    </div>
  );

  const getCompatibleTypes = (bloodType) => {
    const compatibility = {
      'A+': 'A+, AB+',
      'A-': 'A+, A-, AB+, AB-',
      'B+': 'B+, AB+',
      'B-': 'B+, B-, AB+, AB-',
      'AB+': 'AB+',
      'AB-': 'AB+, AB-',
      'O+': 'O+, A+, B+, AB+',
      'O-': 'All blood types',
      "Don't know": 'Unknown - blood type test required'
    };
    return compatibility[bloodType] || 'Unknown';
  };

  const getNextEligibleDate = (lastDonation) => {
    switch (lastDonation) {
      case 'Never':
        return 'Eligible now';
      case 'Within 3 months':
        return 'After 3 months from last donation';
      case '3-6 months ago':
        return 'Eligible now';
      default:
        return 'Eligible now';
    }
  };

  if (loading && !showResults) {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {progress < 33 ? "Analyzing blood type compatibility..." :
                 progress < 66 ? "Processing medical history..." :
                 "Generating recommendations..."}
              </h3>
              <p className="text-sm text-gray-500">{progress}% complete</p>
            </div>
            <Activity className="text-red-500 animate-pulse" />
          </div>
          
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <div className="animate-pulse space-y-4">
            <div className="border rounded-lg p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>

            <div className="border rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Blood Assessment Results</h2>
        <ResultsView />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Blood Assessment</h2>
          <p className="text-gray-500">Question {step + 1} of {questions.length}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">{questions[step].text}</h3>
          <div className="grid gap-3">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodAssessment;
