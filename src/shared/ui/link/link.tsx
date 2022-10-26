import {
  Link as LinkRoute,
  LinkProps as LinkRouteProps,
} from 'react-router-dom';

type LinkProps = Pick<LinkRouteProps, 'to' | 'children'>;

export const Link = ({ to, children }: LinkProps) => {
  return <LinkRoute to={to}>{children}</LinkRoute>;
};
