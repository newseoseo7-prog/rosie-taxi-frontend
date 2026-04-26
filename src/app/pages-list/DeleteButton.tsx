"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this page?")) return;

        try {
            const res = await fetch("/api/delete_page?id=" + id, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (res.ok) {
                router.refresh(); // Refresh the page to show updated list
            } else {
                alert("Failed to delete page");
            }
        } catch (error) {
            console.error("Error deleting page:", error);
            alert("Error deleting page");
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="inline-block px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        >
            Delete
        </button>
    );
}