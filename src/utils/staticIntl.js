import { IntlProvider } from 'react-intl'
import cs from '../locale/cs'

const staticIntl = new IntlProvider({ messages: cs, locale: 'cs' }).getChildContext().intl

export default staticIntl