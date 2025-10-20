import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data from JSONPlaceholder API with search and pagination.',
      icon: '🌐',
      path: '/api-demo'
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-600 dark:text-blue-400">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A modern, responsive task management application built with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/tasks" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link 
            to="/api-demo" 
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-lg font-medium transition-colors duration-200"
          >
            Explore API
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link 
                to={feature.path}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;