#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  echo "This is our main branch"
  npm run test
  npm run build-project
else 
  echo "This is not our main branch"
  npm run test
  npm run build-project
fi