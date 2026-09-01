// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLinkProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#label_template CcLink#label_template}
    */
    readonly labelTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#link_configuration CcLink#link_configuration}
    */
    readonly linkConfiguration?: CcLink.LinkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#resource_types CcLink#resource_types}
    */
    readonly resourceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#sink_identifier CcLink#sink_identifier}
    */
    readonly sinkIdentifier: string;
    /**
    * Tags to apply to the link
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#tags CcLink#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link awscc_oam_link}
*/
export class CcLink extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_oam_link";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLink resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLink to import
    * @param importFromId The id of the existing CcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLink to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_oam_link", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link awscc_oam_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLinkProps
    */
    public constructor(scope: Construct, id: string, config: CcLinkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_oam_link',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._labelTemplate = config.labelTemplate;
        this._linkConfiguration.internalValue = config.linkConfiguration;
        this._resourceTypes = config.resourceTypes;
        this._sinkIdentifier = config.sinkIdentifier;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // label - computed: true, optional: false, required: false
    public get label() {
        return this.getStringAttribute('label');
    }

    // label_template - computed: true, optional: true, required: false
    private _labelTemplate?: string; 
    public get labelTemplate() {
        return this.getStringAttribute('label_template');
    }
    public set labelTemplate(value: string) {
        this._labelTemplate = value;
    }
    public resetLabelTemplate() {
        this._labelTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelTemplateInput() {
        return this._labelTemplate;
    }

    // link_configuration - computed: true, optional: true, required: false
    private _linkConfiguration = new CcLink.LinkConfigurationPropertyOutputReference(this, "link_configuration");
    public get linkConfiguration() {
        return this._linkConfiguration;
    }
    public putLinkConfiguration(value: CcLink.LinkConfigurationProperty) {
        this._linkConfiguration.internalValue = value;
    }
    public resetLinkConfiguration() {
        this._linkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkConfigurationInput() {
        return this._linkConfiguration.internalValue;
    }

    // resource_types - computed: false, optional: false, required: true
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('resource_types'));
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // sink_identifier - computed: false, optional: false, required: true
    private _sinkIdentifier?: string; 
    public get sinkIdentifier() {
        return this.getStringAttribute('sink_identifier');
    }
    public set sinkIdentifier(value: string) {
        this._sinkIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sinkIdentifierInput() {
        return this._sinkIdentifier;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            label_template: cdktn.stringToTerraform(this._labelTemplate),
            link_configuration: ccLinkLinkConfigurationPropertyToTerraform(this._linkConfiguration.internalValue),
            resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceTypes),
            sink_identifier: cdktn.stringToTerraform(this._sinkIdentifier),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            label_template: {
                value: cdktn.stringToHclTerraform(this._labelTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            link_configuration: {
                value: ccLinkLinkConfigurationPropertyToHclTerraform(this._linkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLink.LinkConfigurationProperty",
            },
            resource_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceTypes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            sink_identifier: {
                value: cdktn.stringToHclTerraform(this._sinkIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLinkLinkFilterPropertyToTerraform(struct?: CcLink.LinkFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.stringToTerraform(struct!.filter),
    }
}


export function ccLinkLinkFilterPropertyToHclTerraform(struct?: CcLink.LinkFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter: {
            value: cdktn.stringToHclTerraform(struct!.filter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkMetricConfigurationPropertyToTerraform(struct?: CcLink.MetricConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.stringToTerraform(struct!.filter),
    }
}


export function ccLinkMetricConfigurationPropertyToHclTerraform(struct?: CcLink.MetricConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter: {
            value: cdktn.stringToHclTerraform(struct!.filter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkLinkConfigurationPropertyToTerraform(struct?: CcLink.LinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_configuration: ccLinkLinkFilterPropertyToTerraform(struct!.logGroupConfiguration),
        metric_configuration: ccLinkMetricConfigurationPropertyToTerraform(struct!.metricConfiguration),
    }
}


export function ccLinkLinkConfigurationPropertyToHclTerraform(struct?: CcLink.LinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_configuration: {
            value: ccLinkLinkFilterPropertyToHclTerraform(struct!.logGroupConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LinkFilterProperty",
        },
        metric_configuration: {
            value: ccLinkMetricConfigurationPropertyToHclTerraform(struct!.metricConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLink {
export interface LinkFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#filter CcLink#filter}
    */
    readonly filter?: string;
}
export class LinkFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filter !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filter = value.filter;
        }
    }

    // filter - computed: true, optional: true, required: false
    private _filter?: string; 
    public get filter() {
        return this.getStringAttribute('filter');
    }
    public set filter(value: string) {
        this._filter = value;
    }
    public resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter;
    }
}
export interface MetricConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#filter CcLink#filter}
    */
    readonly filter?: string;
}
export class MetricConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filter !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filter = value.filter;
        }
    }

    // filter - computed: true, optional: true, required: false
    private _filter?: string; 
    public get filter() {
        return this.getStringAttribute('filter');
    }
    public set filter(value: string) {
        this._filter = value;
    }
    public resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter;
    }
}
export interface LinkConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#log_group_configuration CcLink#log_group_configuration}
    */
    readonly logGroupConfiguration?: LinkFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/oam_link#metric_configuration CcLink#metric_configuration}
    */
    readonly metricConfiguration?: MetricConfigurationProperty;
}
export class LinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupConfiguration = this._logGroupConfiguration?.internalValue;
        }
        if (this._metricConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricConfiguration = this._metricConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupConfiguration.internalValue = undefined;
            this._metricConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupConfiguration.internalValue = value.logGroupConfiguration;
            this._metricConfiguration.internalValue = value.metricConfiguration;
        }
    }

    // log_group_configuration - computed: true, optional: true, required: false
    private _logGroupConfiguration = new LinkFilterPropertyOutputReference(this, "log_group_configuration");
    public get logGroupConfiguration() {
        return this._logGroupConfiguration;
    }
    public putLogGroupConfiguration(value: LinkFilterProperty) {
        this._logGroupConfiguration.internalValue = value;
    }
    public resetLogGroupConfiguration() {
        this._logGroupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupConfigurationInput() {
        return this._logGroupConfiguration.internalValue;
    }

    // metric_configuration - computed: true, optional: true, required: false
    private _metricConfiguration = new MetricConfigurationPropertyOutputReference(this, "metric_configuration");
    public get metricConfiguration() {
        return this._metricConfiguration;
    }
    public putMetricConfiguration(value: MetricConfigurationProperty) {
        this._metricConfiguration.internalValue = value;
    }
    public resetMetricConfiguration() {
        this._metricConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricConfigurationInput() {
        return this._metricConfiguration.internalValue;
    }
}
}
