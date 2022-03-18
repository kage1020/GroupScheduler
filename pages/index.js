import Head from 'next/head'
import Drawer from '../layout/drawer'
import Card from '../components/card'
import Table from '../components/table'

export default function Home(props) {
  const { liff, liffError } = props;
  return (
    <>
      <Head>
        <title>GroupScheduler</title>
        <meta name="description" content="GroupScheduler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer>
        <Card>
          <Table liff={liff} />
        </Card>
      </Drawer>
    </>
  )
}
