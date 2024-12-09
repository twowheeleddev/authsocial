import XmasBorderPropTypes from '../../propTypes/XmasBorderPropTypes'

const XmasBorder = ({ showOnDesktop, showOnMobile }) => {
	return (
		<>
			{/* Top Christmas Border */}
			{showOnDesktop && (
				<div className="absolute inset-x-0 top-0 transform -translate-y-full text-center text-xl hidden lg:block">
					🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁
				</div>
			)}
			{showOnMobile && (
				<div className="absolute inset-x-0 top-0 transform -translate-y-full text-center text-xl block lg:hidden">
					🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁
				</div>
			)}

			{/* Bottom Christmas Border */}
			{showOnDesktop && (
				<div className="absolute inset-x-0 bottom-0 transform translate-y-full text-center text-xl hidden lg:block">
					🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅🎄🎁🎅❄️🎄🎁
				</div>
			)}
			{showOnMobile && (
				<div className="absolute inset-x-0 bottom-0 transform translate-y-full text-center text-xl block lg:hidden">
					🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅❄️🎄🎁🎅🎄🎁🎅❄️🎄🎁
				</div>
			)}
		</>
	)
}

XmasBorder.propTypes = XmasBorderPropTypes

export default XmasBorder
