```javascript
// tailwind.config.js
module.exports = {
  // ... other configurations
  theme: {
    extend: {
      colors: {
        'purple': {
          '500': '#8b5cf6',
        }
      }
    }
  },
  // ... rest of your configurations
}

// bugSolution.js
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <!-- Your content here -->
</div>
```