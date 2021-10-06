import {
  BsPerson as PerfilIcon,
  BsClipboard as EvaluationIcon
} from 'react-icons/bs';
import {
  FiThermometer as PatientsIcon,
  FiGrid as GridIcon
} from 'react-icons/fi';
import { IoNewspaperOutline as PlanIcon } from 'react-icons/io5';

const SidebarLinks = [
  {
    id: 1,
    href: 'http://',
    label: 'Resumo',
    icon: GridIcon
  },
  {
    id: 2,
    href: 'http://',
    label: 'Pacientes',
    icon: PatientsIcon
  },
  {
    id: 3,
    href: 'http://',
    label: 'Planos',
    icon: PlanIcon
  },
  {
    id: 4,
    href: 'http://',
    label: 'Avalições',
    icon: EvaluationIcon
  },
  {
    id: 5,
    href: 'http://',
    label: 'Meu perfil',
    icon: PerfilIcon
  }
];

export default SidebarLinks;
