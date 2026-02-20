#!/bin/bash
# Script to remove node_modules from Git history and apply .gitignore

echo "Step 1: Remove node_modules from Git tracking (keeps local files)"
git rm -r --cached node_modules

echo "Step 2: Add .gitignore to Git"
git add .gitignore

echo "Step 3: Commit the changes"
git commit -m "Add .gitignore and remove node_modules from tracking"

echo "Step 4: Push to GitHub"
git push origin main

echo "Done! Your repository is now clean."
