// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessPointProps extends cdktn.TerraformMetaArguments {
    /**
    * The name you want to assign to this Object lambda Access Point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#name CcAccessPoint#name}
    */
    readonly name?: string;
    /**
    * The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#object_lambda_configuration CcAccessPoint#object_lambda_configuration}
    */
    readonly objectLambdaConfiguration: CcAccessPoint.ObjectLambdaConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point awscc_s3objectlambda_access_point}
*/
export class CcAccessPoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3objectlambda_access_point";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessPoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessPoint to import
    * @param importFromId The id of the existing CcAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessPoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3objectlambda_access_point", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point awscc_s3objectlambda_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessPointProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessPointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3objectlambda_access_point',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._name = config.name;
        this._objectLambdaConfiguration.internalValue = config.objectLambdaConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    private _alias = new CcAccessPoint.AliasPropertyOutputReference(this, "alias");
    public get alias() {
        return this._alias;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // object_lambda_configuration - computed: false, optional: false, required: true
    private _objectLambdaConfiguration = new CcAccessPoint.ObjectLambdaConfigurationPropertyOutputReference(this, "object_lambda_configuration");
    public get objectLambdaConfiguration() {
        return this._objectLambdaConfiguration;
    }
    public putObjectLambdaConfiguration(value: CcAccessPoint.ObjectLambdaConfigurationProperty) {
        this._objectLambdaConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLambdaConfigurationInput() {
        return this._objectLambdaConfiguration.internalValue;
    }

    // policy_status - computed: true, optional: false, required: false
    private _policyStatus = new CcAccessPoint.PolicyStatusPropertyOutputReference(this, "policy_status");
    public get policyStatus() {
        return this._policyStatus;
    }

    // public_access_block_configuration - computed: true, optional: false, required: false
    private _publicAccessBlockConfiguration = new CcAccessPoint.PublicAccessBlockConfigurationPropertyOutputReference(this, "public_access_block_configuration");
    public get publicAccessBlockConfiguration() {
        return this._publicAccessBlockConfiguration;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            object_lambda_configuration: ccAccessPointObjectLambdaConfigurationPropertyToTerraform(this._objectLambdaConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            object_lambda_configuration: {
                value: ccAccessPointObjectLambdaConfigurationPropertyToHclTerraform(this._objectLambdaConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessPoint.ObjectLambdaConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccessPointAliasPropertyToTerraform(struct?: CcAccessPoint.AliasProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAccessPointAliasPropertyToHclTerraform(struct?: CcAccessPoint.AliasProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAccessPointAwsLambdaPropertyToTerraform(struct?: CcAccessPoint.AwsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        function_payload: cdktn.stringToTerraform(struct!.functionPayload),
    }
}


export function ccAccessPointAwsLambdaPropertyToHclTerraform(struct?: CcAccessPoint.AwsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function_payload: {
            value: cdktn.stringToHclTerraform(struct!.functionPayload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointContentTransformationPropertyToTerraform(struct?: CcAccessPoint.ContentTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_lambda: ccAccessPointAwsLambdaPropertyToTerraform(struct!.awsLambda),
    }
}


export function ccAccessPointContentTransformationPropertyToHclTerraform(struct?: CcAccessPoint.ContentTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_lambda: {
            value: ccAccessPointAwsLambdaPropertyToHclTerraform(struct!.awsLambda),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsLambdaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointTransformationConfigurationPropertyToTerraform(struct?: CcAccessPoint.TransformationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        content_transformation: ccAccessPointContentTransformationPropertyToTerraform(struct!.contentTransformation),
    }
}


export function ccAccessPointTransformationConfigurationPropertyToHclTerraform(struct?: CcAccessPoint.TransformationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        content_transformation: {
            value: ccAccessPointContentTransformationPropertyToHclTerraform(struct!.contentTransformation),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentTransformationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointObjectLambdaConfigurationPropertyToTerraform(struct?: CcAccessPoint.ObjectLambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_features: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedFeatures),
        cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
        supporting_access_point: cdktn.stringToTerraform(struct!.supportingAccessPoint),
        transformation_configurations: cdktn.listMapper(ccAccessPointTransformationConfigurationPropertyToTerraform, false)(struct!.transformationConfigurations),
    }
}


export function ccAccessPointObjectLambdaConfigurationPropertyToHclTerraform(struct?: CcAccessPoint.ObjectLambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_features: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedFeatures),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        cloudwatch_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        supporting_access_point: {
            value: cdktn.stringToHclTerraform(struct!.supportingAccessPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transformation_configurations: {
            value: cdktn.listMapperHcl(ccAccessPointTransformationConfigurationPropertyToHclTerraform, false)(struct!.transformationConfigurations),
            isBlock: true,
            type: "set",
            storageClassType: "TransformationConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointPolicyStatusPropertyToTerraform(struct?: CcAccessPoint.PolicyStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAccessPointPolicyStatusPropertyToHclTerraform(struct?: CcAccessPoint.PolicyStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAccessPointPublicAccessBlockConfigurationPropertyToTerraform(struct?: CcAccessPoint.PublicAccessBlockConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAccessPointPublicAccessBlockConfigurationPropertyToHclTerraform(struct?: CcAccessPoint.PublicAccessBlockConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcAccessPoint {
export interface AliasProperty {
}
export class AliasPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AliasProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AliasProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getStringAttribute('value');
    }
}
export interface AwsLambdaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#function_arn CcAccessPoint#function_arn}
    */
    readonly functionArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#function_payload CcAccessPoint#function_payload}
    */
    readonly functionPayload?: string;
}
export class AwsLambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsLambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._functionPayload !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionPayload = this._functionPayload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsLambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._functionPayload = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._functionPayload = value.functionPayload;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // function_payload - computed: true, optional: true, required: false
    private _functionPayload?: string; 
    public get functionPayload() {
        return this.getStringAttribute('function_payload');
    }
    public set functionPayload(value: string) {
        this._functionPayload = value;
    }
    public resetFunctionPayload() {
        this._functionPayload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionPayloadInput() {
        return this._functionPayload;
    }
}
export interface ContentTransformationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#aws_lambda CcAccessPoint#aws_lambda}
    */
    readonly awsLambda?: AwsLambdaProperty;
}
export class ContentTransformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentTransformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsLambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsLambda = this._awsLambda?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentTransformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsLambda.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsLambda.internalValue = value.awsLambda;
        }
    }

    // aws_lambda - computed: true, optional: true, required: false
    private _awsLambda = new AwsLambdaPropertyOutputReference(this, "aws_lambda");
    public get awsLambda() {
        return this._awsLambda;
    }
    public putAwsLambda(value: AwsLambdaProperty) {
        this._awsLambda.internalValue = value;
    }
    public resetAwsLambda() {
        this._awsLambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsLambdaInput() {
        return this._awsLambda.internalValue;
    }
}
export interface TransformationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#actions CcAccessPoint#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#content_transformation CcAccessPoint#content_transformation}
    */
    readonly contentTransformation: ContentTransformationProperty;
}
export class TransformationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TransformationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._contentTransformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTransformation = this._contentTransformation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._contentTransformation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._contentTransformation.internalValue = value.contentTransformation;
        }
    }

    // actions - computed: false, optional: false, required: true
    private _actions?: string[]; 
    public get actions() {
        return cdktn.Fn.tolist(this.getListAttribute('actions'));
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // content_transformation - computed: false, optional: false, required: true
    private _contentTransformation = new ContentTransformationPropertyOutputReference(this, "content_transformation");
    public get contentTransformation() {
        return this._contentTransformation;
    }
    public putContentTransformation(value: ContentTransformationProperty) {
        this._contentTransformation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTransformationInput() {
        return this._contentTransformation.internalValue;
    }
}

export class TransformationConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : TransformationConfigurationProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TransformationConfigurationPropertyOutputReference {
        return new TransformationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ObjectLambdaConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#allowed_features CcAccessPoint#allowed_features}
    */
    readonly allowedFeatures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled CcAccessPoint#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#supporting_access_point CcAccessPoint#supporting_access_point}
    */
    readonly supportingAccessPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3objectlambda_access_point#transformation_configurations CcAccessPoint#transformation_configurations}
    */
    readonly transformationConfigurations: TransformationConfigurationProperty[] | cdktn.IResolvable;
}
export class ObjectLambdaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ObjectLambdaConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedFeatures !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedFeatures = this._allowedFeatures;
        }
        if (this._cloudwatchMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
        }
        if (this._supportingAccessPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportingAccessPoint = this._supportingAccessPoint;
        }
        if (this._transformationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformationConfigurations = this._transformationConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectLambdaConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedFeatures = undefined;
            this._cloudwatchMetricsEnabled = undefined;
            this._supportingAccessPoint = undefined;
            this._transformationConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedFeatures = value.allowedFeatures;
            this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
            this._supportingAccessPoint = value.supportingAccessPoint;
            this._transformationConfigurations.internalValue = value.transformationConfigurations;
        }
    }

    // allowed_features - computed: true, optional: true, required: false
    private _allowedFeatures?: string[]; 
    public get allowedFeatures() {
        return cdktn.Fn.tolist(this.getListAttribute('allowed_features'));
    }
    public set allowedFeatures(value: string[]) {
        this._allowedFeatures = value;
    }
    public resetAllowedFeatures() {
        this._allowedFeatures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedFeaturesInput() {
        return this._allowedFeatures;
    }

    // cloudwatch_metrics_enabled - computed: true, optional: true, required: false
    private _cloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get cloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('cloudwatch_metrics_enabled');
    }
    public set cloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._cloudwatchMetricsEnabled = value;
    }
    public resetCloudwatchMetricsEnabled() {
        this._cloudwatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchMetricsEnabledInput() {
        return this._cloudwatchMetricsEnabled;
    }

    // supporting_access_point - computed: false, optional: false, required: true
    private _supportingAccessPoint?: string; 
    public get supportingAccessPoint() {
        return this.getStringAttribute('supporting_access_point');
    }
    public set supportingAccessPoint(value: string) {
        this._supportingAccessPoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supportingAccessPointInput() {
        return this._supportingAccessPoint;
    }

    // transformation_configurations - computed: false, optional: false, required: true
    private _transformationConfigurations = new TransformationConfigurationPropertyList(this, "transformation_configurations", true);
    public get transformationConfigurations() {
        return this._transformationConfigurations;
    }
    public putTransformationConfigurations(value: TransformationConfigurationProperty[] | cdktn.IResolvable) {
        this._transformationConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationConfigurationsInput() {
        return this._transformationConfigurations.internalValue;
    }
}
export interface PolicyStatusProperty {
}
export class PolicyStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyStatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyStatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // is_public - computed: true, optional: false, required: false
    public get isPublic() {
        return this.getBooleanAttribute('is_public');
    }
}
export interface PublicAccessBlockConfigurationProperty {
}
export class PublicAccessBlockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicAccessBlockConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicAccessBlockConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // block_public_acls - computed: true, optional: false, required: false
    public get blockPublicAcls() {
        return this.getBooleanAttribute('block_public_acls');
    }

    // block_public_policy - computed: true, optional: false, required: false
    public get blockPublicPolicy() {
        return this.getBooleanAttribute('block_public_policy');
    }

    // ignore_public_acls - computed: true, optional: false, required: false
    public get ignorePublicAcls() {
        return this.getBooleanAttribute('ignore_public_acls');
    }

    // restrict_public_buckets - computed: true, optional: false, required: false
    public get restrictPublicBuckets() {
        return this.getBooleanAttribute('restrict_public_buckets');
    }
}
}
