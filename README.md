# Firebase Document Snapshot Error
This repository demonstrates a common error when working with Firebase document snapshots and provides a solution.
The problem arises when attempting to access properties of a document snapshot before verifying its existence using `snapshot.exists`.  Failure to do so results in errors, particularly when dealing with asynchronous operations.
The solution involves adding an `if (snapshot.exists)` check before accessing any snapshot properties.

## How to Reproduce
1. Clone the repository.
2. Ensure you have the Firebase JavaScript SDK installed (`npm install firebase`).
3. Configure your Firebase project.
4. Run `bug.js` to see the error.
5. Run `bugSolution.js` to see the corrected implementation.

## Solution
Always check `snapshot.exists` before accessing data from a Firebase document snapshot to prevent unexpected errors and improve the robustness of your application.