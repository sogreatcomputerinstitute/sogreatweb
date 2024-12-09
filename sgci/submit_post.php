<?php
// Ensure that you have database connection
// (e.g., $pdo is your PDO instance or you can use mysqli)

// Check if form data is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $name = $_POST['name'] ?? '';
    $post = $_POST['post'] ?? '';

    // Simple validation
    if (empty($name) || empty($post)) {
        echo json_encode(['status' => 'error', 'message' => 'Both name and post are required']);
        exit;
    }

    // Prepare your SQL query (replace this with actual database insertion logic)
    // Example using PDO
    $stmt = $pdo->prepare("INSERT INTO posts (name, post_content) VALUES (:name, :post)");
    $stmt->execute(['name' => $name, 'post_content' => $post]);

    // Return success message
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
