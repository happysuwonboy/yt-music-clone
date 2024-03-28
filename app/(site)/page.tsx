import { sleep } from '@/lib/utils';
import Image from "next/image";

const page = async () => {

  await sleep(2000);

  return <div>home</div>
}

export default page;