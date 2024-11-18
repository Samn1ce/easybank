export default function Button({ classname }) {
	return (
		<button
			className={`${classname} rounded-full bg-zinc-400 py-3 px-8 bg-buttonGradient text-white font-semibold`}
		>
			Request Invite
		</button>
	)
}
