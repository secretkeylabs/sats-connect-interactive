import { Show, For, type Component, type JSX } from "solid-js";
import { H1, H2, P, ParamTable } from "../Mdx/Mdx";

type Param = {
  name: string;
  type: string;
  required?: boolean;
  description: string;
};

type MethodPageProps = {
  /** Method name displayed as the page title (H1). */
  method: string;

  /** Introductory description rendered as a paragraph below the title. */
  description: JSX.Element;

  /** Interactive example component rendered under the "Try it" heading. */
  example: JSX.Element;

  /**
   * Top-level parameter definitions. When provided, renders an
   * "H2 Parameters" section with a ParamTable. When omitted, the
   * `noParamsCallout` is rendered instead.
   */
  params?: Param[];

  /**
   * Additional param groups for nested structures (e.g. "Each transfer
   * object contains:"). Each entry renders a description paragraph
   * followed by a ParamTable.
   */
  additionalParams?: Array<{
    description: JSX.Element;
    params: Param[];
  }>;

  /**
   * Extra content rendered after the parameters section and before
   * "Try it". Use for callouts that relate to the parameters
   * (e.g. tips about helper functions).
   */
  afterParams?: JSX.Element;

  /**
   * Content rendered in place of the parameters section when `params`
   * is not provided. Typically a `<Callout type="info">` explaining
   * that no parameters are required.
   */
  noParamsCallout?: JSX.Element;

  /**
   * Optional description paragraph rendered at the start of the
   * Response section, before the response ParamTable.
   */
  responseDescription?: JSX.Element;

  /** Response field definitions rendered as a ParamTable. */
  responseParams?: Param[];

  /**
   * Additional response param groups for nested structures.
   * Each entry renders a description paragraph followed by a ParamTable.
   */
  additionalResponseParams?: Array<{
    description: JSX.Element;
    params: Param[];
  }>;

  /**
   * Trailing content rendered after the Response section.
   * Typically a `<Callout>` with tips or warnings.
   */
  footer?: JSX.Element;
};

export const MethodPage: Component<MethodPageProps> = (props) => {
  return (
    <>
      <H1>{props.method}</H1>

      <P>{props.description}</P>

      <Show
        when={props.params}
        fallback={
          <Show when={props.noParamsCallout}>{props.noParamsCallout}</Show>
        }
      >
        <H2>Parameters</H2>
        <ParamTable params={props.params!} />

        <For each={props.additionalParams}>
          {(section) => (
            <>
              <P>{section.description}</P>
              <ParamTable params={section.params} />
            </>
          )}
        </For>
      </Show>

      <Show when={props.afterParams}>{props.afterParams}</Show>

      <H2>Try it</H2>
      {props.example}

      <H2>Response</H2>
      <Show when={props.responseDescription}>
        <P>{props.responseDescription!}</P>
      </Show>
      <Show when={props.responseParams}>
        <ParamTable params={props.responseParams!} />
      </Show>

      <For each={props.additionalResponseParams}>
        {(section) => (
          <>
            <P>{section.description}</P>
            <ParamTable params={section.params} />
          </>
        )}
      </For>

      <Show when={props.footer}>{props.footer}</Show>
    </>
  );
};
