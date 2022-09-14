import './index.styl'

const LayoutFooter = () => {
  const curYear = new Date().getFullYear()
  return (
    <div className='layout-footer'>
      <span>{curYear} © cafehaus</span>
    </div>
  )
}

export default LayoutFooter
