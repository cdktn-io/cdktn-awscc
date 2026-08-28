// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDetectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#data_sources CcDetector#data_sources}
    */
    readonly dataSources?: CcDetector.CFNDataSourceConfigurationsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#enable CcDetector#enable}
    */
    readonly enable: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#features CcDetector#features}
    */
    readonly features?: CcDetector.CFNFeatureConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#finding_publishing_frequency CcDetector#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#tags CcDetector#tags}
    */
    readonly tags?: CcDetector.TagItemProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector awscc_guardduty_detector}
*/
export class CcDetector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_guardduty_detector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDetector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDetector to import
    * @param importFromId The id of the existing CcDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDetector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_detector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector awscc_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDetectorProps
    */
    public constructor(scope: Construct, id: string, config: CcDetectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_guardduty_detector',
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
        this._dataSources.internalValue = config.dataSources;
        this._enable = config.enable;
        this._features.internalValue = config.features;
        this._findingPublishingFrequency = config.findingPublishingFrequency;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_sources - computed: true, optional: true, required: false
    private _dataSources = new CcDetector.CFNDataSourceConfigurationsPropertyOutputReference(this, "data_sources");
    public get dataSources() {
        return this._dataSources;
    }
    public putDataSources(value: CcDetector.CFNDataSourceConfigurationsProperty) {
        this._dataSources.internalValue = value;
    }
    public resetDataSources() {
        this._dataSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourcesInput() {
        return this._dataSources.internalValue;
    }

    // detector_id - computed: true, optional: false, required: false
    public get detectorId() {
        return this.getStringAttribute('detector_id');
    }

    // enable - computed: false, optional: false, required: true
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
    }

    // features - computed: true, optional: true, required: false
    private _features = new CcDetector.CFNFeatureConfigurationPropertyList(this, "features", false);
    public get features() {
        return this._features;
    }
    public putFeatures(value: CcDetector.CFNFeatureConfigurationProperty[] | cdktn.IResolvable) {
        this._features.internalValue = value;
    }
    public resetFeatures() {
        this._features.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featuresInput() {
        return this._features.internalValue;
    }

    // finding_publishing_frequency - computed: true, optional: true, required: false
    private _findingPublishingFrequency?: string; 
    public get findingPublishingFrequency() {
        return this.getStringAttribute('finding_publishing_frequency');
    }
    public set findingPublishingFrequency(value: string) {
        this._findingPublishingFrequency = value;
    }
    public resetFindingPublishingFrequency() {
        this._findingPublishingFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingPublishingFrequencyInput() {
        return this._findingPublishingFrequency;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDetector.TagItemPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDetector.TagItemProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_sources: ccDetectorCFNDataSourceConfigurationsPropertyToTerraform(this._dataSources.internalValue),
            enable: cdktn.booleanToTerraform(this._enable),
            features: cdktn.listMapper(ccDetectorCFNFeatureConfigurationPropertyToTerraform, false)(this._features.internalValue),
            finding_publishing_frequency: cdktn.stringToTerraform(this._findingPublishingFrequency),
            tags: cdktn.listMapper(ccDetectorTagItemPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_sources: {
                value: ccDetectorCFNDataSourceConfigurationsPropertyToHclTerraform(this._dataSources.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDetector.CFNDataSourceConfigurationsProperty",
            },
            enable: {
                value: cdktn.booleanToHclTerraform(this._enable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            features: {
                value: cdktn.listMapperHcl(ccDetectorCFNFeatureConfigurationPropertyToHclTerraform, false)(this._features.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDetector.CFNFeatureConfigurationPropertyList",
            },
            finding_publishing_frequency: {
                value: cdktn.stringToHclTerraform(this._findingPublishingFrequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDetectorTagItemPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDetector.TagItemPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDetectorCFNKubernetesAuditLogsConfigurationPropertyToTerraform(struct?: CcDetector.CFNKubernetesAuditLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable: cdktn.booleanToTerraform(struct!.enable),
    }
}


export function ccDetectorCFNKubernetesAuditLogsConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNKubernetesAuditLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable: {
            value: cdktn.booleanToHclTerraform(struct!.enable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNKubernetesConfigurationPropertyToTerraform(struct?: CcDetector.CFNKubernetesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audit_logs: ccDetectorCFNKubernetesAuditLogsConfigurationPropertyToTerraform(struct!.auditLogs),
    }
}


export function ccDetectorCFNKubernetesConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNKubernetesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audit_logs: {
            value: ccDetectorCFNKubernetesAuditLogsConfigurationPropertyToHclTerraform(struct!.auditLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CFNKubernetesAuditLogsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNScanEc2InstanceWithFindingsConfigurationPropertyToTerraform(struct?: CcDetector.CFNScanEc2InstanceWithFindingsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volumes: cdktn.booleanToTerraform(struct!.ebsVolumes),
    }
}


export function ccDetectorCFNScanEc2InstanceWithFindingsConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNScanEc2InstanceWithFindingsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_volumes: {
            value: cdktn.booleanToHclTerraform(struct!.ebsVolumes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNMalwareProtectionConfigurationPropertyToTerraform(struct?: CcDetector.CFNMalwareProtectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scan_ec_2_instance_with_findings: ccDetectorCFNScanEc2InstanceWithFindingsConfigurationPropertyToTerraform(struct!.scanEc2InstanceWithFindings),
    }
}


export function ccDetectorCFNMalwareProtectionConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNMalwareProtectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scan_ec_2_instance_with_findings: {
            value: ccDetectorCFNScanEc2InstanceWithFindingsConfigurationPropertyToHclTerraform(struct!.scanEc2InstanceWithFindings),
            isBlock: true,
            type: "struct",
            storageClassType: "CFNScanEc2InstanceWithFindingsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNS3LogsConfigurationPropertyToTerraform(struct?: CcDetector.CFNS3LogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable: cdktn.booleanToTerraform(struct!.enable),
    }
}


export function ccDetectorCFNS3LogsConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNS3LogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable: {
            value: cdktn.booleanToHclTerraform(struct!.enable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNDataSourceConfigurationsPropertyToTerraform(struct?: CcDetector.CFNDataSourceConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kubernetes: ccDetectorCFNKubernetesConfigurationPropertyToTerraform(struct!.kubernetes),
        malware_protection: ccDetectorCFNMalwareProtectionConfigurationPropertyToTerraform(struct!.malwareProtection),
        s3_logs: ccDetectorCFNS3LogsConfigurationPropertyToTerraform(struct!.s3Logs),
    }
}


export function ccDetectorCFNDataSourceConfigurationsPropertyToHclTerraform(struct?: CcDetector.CFNDataSourceConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kubernetes: {
            value: ccDetectorCFNKubernetesConfigurationPropertyToHclTerraform(struct!.kubernetes),
            isBlock: true,
            type: "struct",
            storageClassType: "CFNKubernetesConfigurationProperty",
        },
        malware_protection: {
            value: ccDetectorCFNMalwareProtectionConfigurationPropertyToHclTerraform(struct!.malwareProtection),
            isBlock: true,
            type: "struct",
            storageClassType: "CFNMalwareProtectionConfigurationProperty",
        },
        s3_logs: {
            value: ccDetectorCFNS3LogsConfigurationPropertyToHclTerraform(struct!.s3Logs),
            isBlock: true,
            type: "struct",
            storageClassType: "CFNS3LogsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNFeatureAdditionalConfigurationPropertyToTerraform(struct?: CcDetector.CFNFeatureAdditionalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDetectorCFNFeatureAdditionalConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNFeatureAdditionalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorCFNFeatureConfigurationPropertyToTerraform(struct?: CcDetector.CFNFeatureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_configuration: cdktn.listMapper(ccDetectorCFNFeatureAdditionalConfigurationPropertyToTerraform, false)(struct!.additionalConfiguration),
        name: cdktn.stringToTerraform(struct!.name),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDetectorCFNFeatureConfigurationPropertyToHclTerraform(struct?: CcDetector.CFNFeatureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_configuration: {
            value: cdktn.listMapperHcl(ccDetectorCFNFeatureAdditionalConfigurationPropertyToHclTerraform, false)(struct!.additionalConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "CFNFeatureAdditionalConfigurationPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorTagItemPropertyToTerraform(struct?: CcDetector.TagItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDetectorTagItemPropertyToHclTerraform(struct?: CcDetector.TagItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDetector {
export interface CFNKubernetesAuditLogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#enable CcDetector#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
}
export class CFNKubernetesAuditLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNKubernetesAuditLogsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enable !== undefined) {
            hasAnyValues = true;
            internalValueResult.enable = this._enable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNKubernetesAuditLogsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enable = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enable = value.enable;
        }
    }

    // enable - computed: true, optional: true, required: false
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    public resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
    }
}
export interface CFNKubernetesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#audit_logs CcDetector#audit_logs}
    */
    readonly auditLogs?: CFNKubernetesAuditLogsConfigurationProperty;
}
export class CFNKubernetesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNKubernetesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._auditLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditLogs = this._auditLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNKubernetesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auditLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auditLogs.internalValue = value.auditLogs;
        }
    }

    // audit_logs - computed: true, optional: true, required: false
    private _auditLogs = new CFNKubernetesAuditLogsConfigurationPropertyOutputReference(this, "audit_logs");
    public get auditLogs() {
        return this._auditLogs;
    }
    public putAuditLogs(value: CFNKubernetesAuditLogsConfigurationProperty) {
        this._auditLogs.internalValue = value;
    }
    public resetAuditLogs() {
        this._auditLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditLogsInput() {
        return this._auditLogs.internalValue;
    }
}
export interface CFNScanEc2InstanceWithFindingsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#ebs_volumes CcDetector#ebs_volumes}
    */
    readonly ebsVolumes?: boolean | cdktn.IResolvable;
}
export class CFNScanEc2InstanceWithFindingsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNScanEc2InstanceWithFindingsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsVolumes !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumes = this._ebsVolumes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNScanEc2InstanceWithFindingsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumes = value.ebsVolumes;
        }
    }

    // ebs_volumes - computed: true, optional: true, required: false
    private _ebsVolumes?: boolean | cdktn.IResolvable; 
    public get ebsVolumes() {
        return this.getBooleanAttribute('ebs_volumes');
    }
    public set ebsVolumes(value: boolean | cdktn.IResolvable) {
        this._ebsVolumes = value;
    }
    public resetEbsVolumes() {
        this._ebsVolumes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumesInput() {
        return this._ebsVolumes;
    }
}
export interface CFNMalwareProtectionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings CcDetector#scan_ec_2_instance_with_findings}
    */
    readonly scanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfigurationProperty;
}
export class CFNMalwareProtectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNMalwareProtectionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scanEc2InstanceWithFindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scanEc2InstanceWithFindings = this._scanEc2InstanceWithFindings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNMalwareProtectionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scanEc2InstanceWithFindings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scanEc2InstanceWithFindings.internalValue = value.scanEc2InstanceWithFindings;
        }
    }

    // scan_ec_2_instance_with_findings - computed: true, optional: true, required: false
    private _scanEc2InstanceWithFindings = new CFNScanEc2InstanceWithFindingsConfigurationPropertyOutputReference(this, "scan_ec_2_instance_with_findings");
    public get scanEc2InstanceWithFindings() {
        return this._scanEc2InstanceWithFindings;
    }
    public putScanEc2InstanceWithFindings(value: CFNScanEc2InstanceWithFindingsConfigurationProperty) {
        this._scanEc2InstanceWithFindings.internalValue = value;
    }
    public resetScanEc2InstanceWithFindings() {
        this._scanEc2InstanceWithFindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanEc2InstanceWithFindingsInput() {
        return this._scanEc2InstanceWithFindings.internalValue;
    }
}
export interface CFNS3LogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#enable CcDetector#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
}
export class CFNS3LogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNS3LogsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enable !== undefined) {
            hasAnyValues = true;
            internalValueResult.enable = this._enable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNS3LogsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enable = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enable = value.enable;
        }
    }

    // enable - computed: true, optional: true, required: false
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    public resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
    }
}
export interface CFNDataSourceConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#kubernetes CcDetector#kubernetes}
    */
    readonly kubernetes?: CFNKubernetesConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#malware_protection CcDetector#malware_protection}
    */
    readonly malwareProtection?: CFNMalwareProtectionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#s3_logs CcDetector#s3_logs}
    */
    readonly s3Logs?: CFNS3LogsConfigurationProperty;
}
export class CFNDataSourceConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CFNDataSourceConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kubernetes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kubernetes = this._kubernetes?.internalValue;
        }
        if (this._malwareProtection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.malwareProtection = this._malwareProtection?.internalValue;
        }
        if (this._s3Logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Logs = this._s3Logs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNDataSourceConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kubernetes.internalValue = undefined;
            this._malwareProtection.internalValue = undefined;
            this._s3Logs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kubernetes.internalValue = value.kubernetes;
            this._malwareProtection.internalValue = value.malwareProtection;
            this._s3Logs.internalValue = value.s3Logs;
        }
    }

    // kubernetes - computed: true, optional: true, required: false
    private _kubernetes = new CFNKubernetesConfigurationPropertyOutputReference(this, "kubernetes");
    public get kubernetes() {
        return this._kubernetes;
    }
    public putKubernetes(value: CFNKubernetesConfigurationProperty) {
        this._kubernetes.internalValue = value;
    }
    public resetKubernetes() {
        this._kubernetes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesInput() {
        return this._kubernetes.internalValue;
    }

    // malware_protection - computed: true, optional: true, required: false
    private _malwareProtection = new CFNMalwareProtectionConfigurationPropertyOutputReference(this, "malware_protection");
    public get malwareProtection() {
        return this._malwareProtection;
    }
    public putMalwareProtection(value: CFNMalwareProtectionConfigurationProperty) {
        this._malwareProtection.internalValue = value;
    }
    public resetMalwareProtection() {
        this._malwareProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get malwareProtectionInput() {
        return this._malwareProtection.internalValue;
    }

    // s3_logs - computed: true, optional: true, required: false
    private _s3Logs = new CFNS3LogsConfigurationPropertyOutputReference(this, "s3_logs");
    public get s3Logs() {
        return this._s3Logs;
    }
    public putS3Logs(value: CFNS3LogsConfigurationProperty) {
        this._s3Logs.internalValue = value;
    }
    public resetS3Logs() {
        this._s3Logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
        return this._s3Logs.internalValue;
    }
}
export interface CFNFeatureAdditionalConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#name CcDetector#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#status CcDetector#status}
    */
    readonly status?: string;
}
export class CFNFeatureAdditionalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CFNFeatureAdditionalConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNFeatureAdditionalConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._status = value.status;
        }
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

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class CFNFeatureAdditionalConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : CFNFeatureAdditionalConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): CFNFeatureAdditionalConfigurationPropertyOutputReference {
        return new CFNFeatureAdditionalConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CFNFeatureConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#additional_configuration CcDetector#additional_configuration}
    */
    readonly additionalConfiguration?: CFNFeatureAdditionalConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#name CcDetector#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#status CcDetector#status}
    */
    readonly status?: string;
}
export class CFNFeatureConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CFNFeatureConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalConfiguration = this._additionalConfiguration?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CFNFeatureConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalConfiguration.internalValue = undefined;
            this._name = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalConfiguration.internalValue = value.additionalConfiguration;
            this._name = value.name;
            this._status = value.status;
        }
    }

    // additional_configuration - computed: true, optional: true, required: false
    private _additionalConfiguration = new CFNFeatureAdditionalConfigurationPropertyList(this, "additional_configuration", false);
    public get additionalConfiguration() {
        return this._additionalConfiguration;
    }
    public putAdditionalConfiguration(value: CFNFeatureAdditionalConfigurationProperty[] | cdktn.IResolvable) {
        this._additionalConfiguration.internalValue = value;
    }
    public resetAdditionalConfiguration() {
        this._additionalConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalConfigurationInput() {
        return this._additionalConfiguration.internalValue;
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

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class CFNFeatureConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : CFNFeatureConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): CFNFeatureConfigurationPropertyOutputReference {
        return new CFNFeatureConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#key CcDetector#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/guardduty_detector#value CcDetector#value}
    */
    readonly value?: string;
}
export class TagItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagItemPropertyList extends cdktn.ComplexList {
    public internalValue? : TagItemProperty[] | cdktn.IResolvable

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
    public get(index: number): TagItemPropertyOutputReference {
        return new TagItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
