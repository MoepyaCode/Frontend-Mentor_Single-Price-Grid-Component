import { Container, Main, Wrapper } from './components'

export default function App() {

  return (
    <Main className='font-karla bg-[#E6EFF5] grid place-items-center min-w-full px-[32px] pt-[72px] pb-[62px]'>

      <Container className='w-full flex flex-col min-h-[722px] sm:min-h-[475px] bg-white rounded-t-[5px] sm:rounded-[5px] overflow-hidden max-w-[634px]'>

        <Wrapper className='flex-grow px-[24px] py-[28px] sm:'>
          <h1 className='text-[#2AB3B1] text-[20px] font-bold tracking-[-0.25px] mb-[24px]'>
            Join our community
          </h1>

          <h2 className='text-[#C0DF33] text-[15px] font-bold mb-[16px]'>
            30-day, hassle-free money back guarantee
          </h2>

          <p className='text-[14px] text-[#9AA7BE] leading-[26px] tracking-[-0.17px]'>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
          </p>

        </Wrapper>

        <Wrapper className='min-h-[455px] sm:min-h-[259px] flex flex-col sm:flex-row'>

          <Wrapper className='flex-grow bg-[#2AB3B1] p-[24px] sm:min-w-[318px] text-white max-h-[227px] sm:max-h-max flex flex-col sm:justify-evenly'>
            <h2 className='font-bold text-[18px] tracking-[-0.22px]'>
              Monthly Subscription
            </h2>

            <div className='flex flex-nowrap gap-[11px] items-center '>
              <span className='font-bold text-[32px] tracking-[-0.4px]'>$29</span>
              <span className='leading-[26px] tracking-[-0.2px] opacity-50'>per month</span>
            </div>

            <p className='leading-[26px] tracking-[-0.2px]'>Full access for less than $1 a day</p>

            <button className='grid place-items-center w-full h-[48px] mt-[26px] bg-[#C0DF33] rounded-[5px] font-bold tracking-[-0.2px] shadow-[0_10px_10px_0_rgba(0,0,0,.0973)]'>
              Sign Up
            </button>
          </Wrapper>

          <Wrapper className='text-white flex-grow sm:min-w-[318px] bg-[#2AB3B1] opacity-[calc(1-0.1519)] p-[24px] flex flex-col justify-evenly sm:justify-around gap-[18px]'>
            <h2 className='font-bold text-[18px] tracking-[-0.22px]'>
              Why Us
            </h2>

            <p className='text-[14px] leading-[20px] tracking-[-0.17px] mr-[77px] opacity-75'>
              Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week
            </p>
          </Wrapper>

        </Wrapper>

      </Container>

    </Main>
  )
}
