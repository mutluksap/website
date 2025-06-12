import Stat from './Stat'

type Props = {
    followers: string
    following: string
}

const Stats = (props: Props) => (
    <section className="grid gap-4 sm:grid-flow-col sm:grid-cols-2">
        <Stat label="GitHub Followers" value={props.followers} />
        <Stat label="GitHub Following" value={props.following} />
    </section>
)

export default Stats