<?php
header('Content-Type: application/json');

// Check if name and post are provided
if (isset($_POST['name']) && isset($_POST['post'])) {
    $name = strip_tags($_POST['name']);  // Sanitize input
    $post = strip_tags($_POST['post']);  // Sanitize input

    // Create a string with name and post content
    $postContent = json_encode([
        'name' => $name,
        'post' => $post
    ]);

    // Append the post to a text file (make sure the file is writable)
    $file = 'posts.txt'; 
    if (file_put_contents($file, $postContent . "\n", FILE_APPEND) !== false) {
        // Success: Send a success response
        echo json_encode(['status' => 'success']);
    } else {
        // Error: Failed to write to file
        echo json_encode(['status' => 'error', 'message' => 'Failed to save post']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}
?>
