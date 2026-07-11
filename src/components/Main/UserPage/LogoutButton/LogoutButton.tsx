import { useMutation } from "@tanstack/react-query"
import { fetchLogOut } from "@/api/auth/fetches"
import { client } from "@/api/client"
import { useRouter } from "next/navigation"

export const LogoutButton = () => {
    const router = useRouter()

    const logoutMutation = useMutation(
        {
            mutationFn: fetchLogOut,
            onSuccess: async () => {
                await client.invalidateQueries({ queryKey: ['profile'] })
                router.push('/')
            }
        },
        client
    )

    return (
        <div className="account__log-out">
            <button
                className="account__btn"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
            >
                {logoutMutation.isPending ? 'Logging out...' : 'Log out'}
            </button>
            {logoutMutation.isError && (
                <span className="account__error">{logoutMutation.error.message}</span>
            )}
        </div>
    )
}