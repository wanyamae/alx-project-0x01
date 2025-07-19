const PostCard: React.FC = () => {
    return (
        <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold">Post Title</h2>
            <p className="text-gray-700 mt-2">This is a brief description of the post content.</p>
        </div>
    )
}

export default PostCard;