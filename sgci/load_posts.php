<?php
// Ensure you have database connection
// (e.g., $pdo is your PDO instance or you can use mysqli)

// Fetch posts from the database
$stmt = $pdo->query("SELECT name, post_content FROM posts ORDER BY created_at DESC");
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Prepare posts to return
$postsArray = [];
foreach ($posts as $post) {
    $postsArray[] = $post['name'] . ': ' . $post['post_content'];
}

// Return posts in JSON format
echo json_encode([
    'status' => 'success',
    'posts' => $postsArray
]);
?>
