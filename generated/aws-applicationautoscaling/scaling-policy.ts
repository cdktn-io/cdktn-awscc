// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScalingPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the scaling policy.
    *  Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing ``AWS::ApplicationAutoScaling::ScalingPolicy`` resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#policy_name CcScalingPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * The scaling policy type.
    *  The following policy types are supported: 
    *  ``TargetTrackingScaling``—Not supported for Amazon EMR
    *  ``StepScaling``—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
    *  ``PredictiveScaling``—Only supported for Amazon ECS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#policy_type CcScalingPolicy#policy_type}
    */
    readonly policyType: string;
    /**
    * The predictive scaling policy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predictive_scaling_policy_configuration CcScalingPolicy#predictive_scaling_policy_configuration}
    */
    readonly predictiveScalingPolicyConfiguration?: CcScalingPolicy.PredictiveScalingPolicyConfigurationProperty;
    /**
    * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
    *   +  ECS service - The resource type is ``service`` and the unique identifier is the cluster name and service name. Example: ``service/my-cluster/my-service``.
    *   +  Spot Fleet - The resource type is ``spot-fleet-request`` and the unique identifier is the Spot Fleet request ID. Example: ``spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE``.
    *   +  EMR cluster - The resource type is ``instancegroup`` and the unique identifier is the cluster ID and instance group ID. Example: ``instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0``.
    *   +  AppStream 2.0 fleet - The resource type is ``fleet`` and the unique identifier is the fleet name. Example: ``fleet/sample-fleet``.
    *   +  DynamoDB table - The resource type is ``table`` and the unique identifier is the table name. Example: ``table/my-table``.
    *   +  DynamoDB global secondary index - The resource type is ``index`` and the unique identifier is the index name. Example: ``table/my-table/index/my-table-index``.
    *   +  Aurora DB cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:my-db-cluster``.
    *   +  SageMaker endpoint variant - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
    *   +  Custom resources are not supported with a resource type. This parameter must specify the ``OutputValue`` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
    *   +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE``.
    *   +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE``.
    *   +  Lambda provisioned concurrency - The resource type is ``function`` and the unique identifier is the function name with a function version or alias name suffix that is not ``$LATEST``. Example: ``function:my-function:prod`` or ``function:my-function:1``.
    *   +  Amazon Keyspaces table - The resource type is ``table`` and the unique identifier is the table name. Example: ``keyspace/mykeyspace/table/mytable``.
    *   +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: ``arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5``.
    *   +  Amazon ElastiCache replication group - The resource type is ``replication-group`` and the unique identifier is the replication group name. Example: ``replication-group/mycluster``.
    *   +  Amazon ElastiCache cache cluster - The resource type is ``cache-cluster`` and the unique identifier is the cache cluster name. Example: ``cache-cluster/mycluster``.
    *   +  Neptune cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:mycluster``.
    *   +  SageMaker serverless endpoint - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
    *   +  SageMaker inference component - The resource type is ``inference-component`` and the unique identifier is the resource ID. Example: ``inference-component/my-inference-component``.
    *   +  Pool of WorkSpaces - The resource type is ``workspacespool`` and the unique identifier is the pool ID. Example: ``workspacespool/wspool-123456``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#resource_id CcScalingPolicy#resource_id}
    */
    readonly resourceId?: string;
    /**
    * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
    *   +  ``ecs:service:DesiredCount`` - The task count of an ECS service.
    *   +  ``elasticmapreduce:instancegroup:InstanceCount`` - The instance count of an EMR Instance Group.
    *   +  ``ec2:spot-fleet-request:TargetCapacity`` - The target capacity of a Spot Fleet.
    *   +  ``appstream:fleet:DesiredCapacity`` - The capacity of an AppStream 2.0 fleet.
    *   +  ``dynamodb:table:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB table.
    *   +  ``dynamodb:table:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB table.
    *   +  ``dynamodb:index:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB global secondary index.
    *   +  ``dynamodb:index:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB global secondary index.
    *   +  ``rds:cluster:ReadReplicaCount`` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
    *   +  ``sagemaker:variant:DesiredInstanceCount`` - The number of EC2 instances for a SageMaker model endpoint variant.
    *   +  ``custom-resource:ResourceType:Property`` - The scalable dimension for a custom resource provided by your own application or service.
    *   +  ``comprehend:document-classifier-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend document classification endpoint.
    *   +  ``comprehend:entity-recognizer-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
    *   +  ``lambda:function:ProvisionedConcurrency`` - The provisioned concurrency for a Lambda function.
    *   +  ``cassandra:table:ReadCapacityUnits`` - The provisioned read capacity for an Amazon Keyspaces table.
    *   +  ``cassandra:table:WriteCapacityUnits`` - The provisioned write capacity for an Amazon Keyspaces table.
    *   +  ``kafka:broker-storage:VolumeSize`` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
    *   +  ``elasticache:cache-cluster:Nodes`` - The number of nodes for an Amazon ElastiCache cache cluster.
    *   +  ``elasticache:replication-group:NodeGroups`` - The number of node groups for an Amazon ElastiCache replication group.
    *   +  ``elasticache:replication-group:Replicas`` - The number of replicas per node group for an Amazon ElastiCache replication group.
    *   +  ``neptune:cluster:ReadReplicaCount`` - The count of read replicas in an Amazon Neptune DB cluster.
    *   +  ``sagemaker:variant:DesiredProvisionedConcurrency`` - The provisioned concurrency for a SageMaker serverless endpoint.
    *   +  ``sagemaker:inference-component:DesiredCopyCount`` - The number of copies across an endpoint for a SageMaker inference component.
    *   +  ``workspaces:workspacespool:DesiredUserSessions`` - The number of user sessions for the WorkSpaces in the pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scalable_dimension CcScalingPolicy#scalable_dimension}
    */
    readonly scalableDimension?: string;
    /**
    * The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the ``AWS::ApplicationAutoScaling::ScalableTarget`` resource.
    *   You must specify either the ``ScalingTargetId`` property, or the ``ResourceId``, ``ScalableDimension``, and ``ServiceNamespace`` properties, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scaling_target_id CcScalingPolicy#scaling_target_id}
    */
    readonly scalingTargetId?: string;
    /**
    * The namespace of the AWS service that provides the resource, or a ``custom-resource``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#service_namespace CcScalingPolicy#service_namespace}
    */
    readonly serviceNamespace?: string;
    /**
    * A step scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#step_scaling_policy_configuration CcScalingPolicy#step_scaling_policy_configuration}
    */
    readonly stepScalingPolicyConfiguration?: CcScalingPolicy.StepScalingPolicyConfigurationProperty;
    /**
    * A target tracking scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#target_tracking_scaling_policy_configuration CcScalingPolicy#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: CcScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy awscc_applicationautoscaling_scaling_policy}
*/
export class CcScalingPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_applicationautoscaling_scaling_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScalingPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScalingPolicy to import
    * @param importFromId The id of the existing CcScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScalingPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationautoscaling_scaling_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy awscc_applicationautoscaling_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScalingPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcScalingPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_applicationautoscaling_scaling_policy',
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
        this._policyName = config.policyName;
        this._policyType = config.policyType;
        this._predictiveScalingPolicyConfiguration.internalValue = config.predictiveScalingPolicyConfiguration;
        this._resourceId = config.resourceId;
        this._scalableDimension = config.scalableDimension;
        this._scalingTargetId = config.scalingTargetId;
        this._serviceNamespace = config.serviceNamespace;
        this._stepScalingPolicyConfiguration.internalValue = config.stepScalingPolicyConfiguration;
        this._targetTrackingScalingPolicyConfiguration.internalValue = config.targetTrackingScalingPolicyConfiguration;
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

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // policy_type - computed: false, optional: false, required: true
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }

    // predictive_scaling_policy_configuration - computed: true, optional: true, required: false
    private _predictiveScalingPolicyConfiguration = new CcScalingPolicy.PredictiveScalingPolicyConfigurationPropertyOutputReference(this, "predictive_scaling_policy_configuration");
    public get predictiveScalingPolicyConfiguration() {
        return this._predictiveScalingPolicyConfiguration;
    }
    public putPredictiveScalingPolicyConfiguration(value: CcScalingPolicy.PredictiveScalingPolicyConfigurationProperty) {
        this._predictiveScalingPolicyConfiguration.internalValue = value;
    }
    public resetPredictiveScalingPolicyConfiguration() {
        this._predictiveScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingPolicyConfigurationInput() {
        return this._predictiveScalingPolicyConfiguration.internalValue;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // scalable_dimension - computed: true, optional: true, required: false
    private _scalableDimension?: string; 
    public get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
        this._scalableDimension = value;
    }
    public resetScalableDimension() {
        this._scalableDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
        return this._scalableDimension;
    }

    // scaling_target_id - computed: true, optional: true, required: false
    private _scalingTargetId?: string; 
    public get scalingTargetId() {
        return this.getStringAttribute('scaling_target_id');
    }
    public set scalingTargetId(value: string) {
        this._scalingTargetId = value;
    }
    public resetScalingTargetId() {
        this._scalingTargetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingTargetIdInput() {
        return this._scalingTargetId;
    }

    // service_namespace - computed: true, optional: true, required: false
    private _serviceNamespace?: string; 
    public get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
        this._serviceNamespace = value;
    }
    public resetServiceNamespace() {
        this._serviceNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
        return this._serviceNamespace;
    }

    // step_scaling_policy_configuration - computed: true, optional: true, required: false
    private _stepScalingPolicyConfiguration = new CcScalingPolicy.StepScalingPolicyConfigurationPropertyOutputReference(this, "step_scaling_policy_configuration");
    public get stepScalingPolicyConfiguration() {
        return this._stepScalingPolicyConfiguration;
    }
    public putStepScalingPolicyConfiguration(value: CcScalingPolicy.StepScalingPolicyConfigurationProperty) {
        this._stepScalingPolicyConfiguration.internalValue = value;
    }
    public resetStepScalingPolicyConfiguration() {
        this._stepScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepScalingPolicyConfigurationInput() {
        return this._stepScalingPolicyConfiguration.internalValue;
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new CcScalingPolicy.TargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: CcScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy_name: cdktn.stringToTerraform(this._policyName),
            policy_type: cdktn.stringToTerraform(this._policyType),
            predictive_scaling_policy_configuration: ccScalingPolicyPredictiveScalingPolicyConfigurationPropertyToTerraform(this._predictiveScalingPolicyConfiguration.internalValue),
            resource_id: cdktn.stringToTerraform(this._resourceId),
            scalable_dimension: cdktn.stringToTerraform(this._scalableDimension),
            scaling_target_id: cdktn.stringToTerraform(this._scalingTargetId),
            service_namespace: cdktn.stringToTerraform(this._serviceNamespace),
            step_scaling_policy_configuration: ccScalingPolicyStepScalingPolicyConfigurationPropertyToTerraform(this._stepScalingPolicyConfiguration.internalValue),
            target_tracking_scaling_policy_configuration: ccScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(this._targetTrackingScalingPolicyConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_type: {
                value: cdktn.stringToHclTerraform(this._policyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            predictive_scaling_policy_configuration: {
                value: ccScalingPolicyPredictiveScalingPolicyConfigurationPropertyToHclTerraform(this._predictiveScalingPolicyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPolicy.PredictiveScalingPolicyConfigurationProperty",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scalable_dimension: {
                value: cdktn.stringToHclTerraform(this._scalableDimension),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scaling_target_id: {
                value: cdktn.stringToHclTerraform(this._scalingTargetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_namespace: {
                value: cdktn.stringToHclTerraform(this._serviceNamespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            step_scaling_policy_configuration: {
                value: ccScalingPolicyStepScalingPolicyConfigurationPropertyToHclTerraform(this._stepScalingPolicyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPolicy.StepScalingPolicyConfigurationProperty",
            },
            target_tracking_scaling_policy_configuration: {
                value: ccScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(this._targetTrackingScalingPolicyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScalingPolicyPredictiveScalingMetricDimensionPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyPredictiveScalingMetricDimensionPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricDimensionProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyPredictiveScalingMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyPredictiveScalingMetricDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyPredictiveScalingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingMetricDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "PredictiveScalingMetricDimensionPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingMetricStatPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyPredictiveScalingMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyPredictiveScalingMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyPredictiveScalingMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingMetricDataQueryPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyPredictiveScalingMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyPredictiveScalingMetricDataQueryPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyPredictiveScalingMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyPredictiveScalingMetricDataQueryPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingMetricDataQueryPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingMetricDataQueryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_capacity_metric_specification: ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToTerraform(struct!.customizedCapacityMetricSpecification),
        customized_load_metric_specification: ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToTerraform(struct!.customizedLoadMetricSpecification),
        customized_scaling_metric_specification: ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToTerraform(struct!.customizedScalingMetricSpecification),
        predefined_load_metric_specification: ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToTerraform(struct!.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToTerraform(struct!.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToTerraform(struct!.predefinedScalingMetricSpecification),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_capacity_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToHclTerraform(struct!.customizedCapacityMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedCapacityMetricProperty",
        },
        customized_load_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToHclTerraform(struct!.customizedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedLoadMetricProperty",
        },
        customized_scaling_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToHclTerraform(struct!.customizedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedScalingMetricProperty",
        },
        predefined_load_metric_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToHclTerraform(struct!.predefinedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedLoadMetricProperty",
        },
        predefined_metric_pair_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToHclTerraform(struct!.predefinedMetricPairSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedMetricPairProperty",
        },
        predefined_scaling_metric_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToHclTerraform(struct!.predefinedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedScalingMetricProperty",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity_breach_behavior: cdktn.stringToTerraform(struct!.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktn.numberToTerraform(struct!.maxCapacityBuffer),
        metric_specifications: cdktn.listMapper(ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToTerraform, false)(struct!.metricSpecifications),
        mode: cdktn.stringToTerraform(struct!.mode),
        scheduling_buffer_time: cdktn.numberToTerraform(struct!.schedulingBufferTime),
    }
}


export function ccScalingPolicyPredictiveScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity_breach_behavior: {
            value: cdktn.stringToHclTerraform(struct!.maxCapacityBreachBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_capacity_buffer: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacityBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metric_specifications: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToHclTerraform, false)(struct!.metricSpecifications),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingMetricSpecificationPropertyList",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduling_buffer_time: {
            value: cdktn.numberToHclTerraform(struct!.schedulingBufferTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyStepAdjustmentPropertyToTerraform(struct?: CcScalingPolicy.StepAdjustmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_interval_lower_bound: cdktn.numberToTerraform(struct!.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktn.numberToTerraform(struct!.metricIntervalUpperBound),
        scaling_adjustment: cdktn.numberToTerraform(struct!.scalingAdjustment),
    }
}


export function ccScalingPolicyStepAdjustmentPropertyToHclTerraform(struct?: CcScalingPolicy.StepAdjustmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_interval_lower_bound: {
            value: cdktn.numberToHclTerraform(struct!.metricIntervalLowerBound),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metric_interval_upper_bound: {
            value: cdktn.numberToHclTerraform(struct!.metricIntervalUpperBound),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_adjustment: {
            value: cdktn.numberToHclTerraform(struct!.scalingAdjustment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyStepScalingPolicyConfigurationPropertyToTerraform(struct?: CcScalingPolicy.StepScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        adjustment_type: cdktn.stringToTerraform(struct!.adjustmentType),
        cooldown: cdktn.numberToTerraform(struct!.cooldown),
        metric_aggregation_type: cdktn.stringToTerraform(struct!.metricAggregationType),
        min_adjustment_magnitude: cdktn.numberToTerraform(struct!.minAdjustmentMagnitude),
        step_adjustments: cdktn.listMapper(ccScalingPolicyStepAdjustmentPropertyToTerraform, false)(struct!.stepAdjustments),
    }
}


export function ccScalingPolicyStepScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcScalingPolicy.StepScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        adjustment_type: {
            value: cdktn.stringToHclTerraform(struct!.adjustmentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cooldown: {
            value: cdktn.numberToHclTerraform(struct!.cooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metric_aggregation_type: {
            value: cdktn.stringToHclTerraform(struct!.metricAggregationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_adjustment_magnitude: {
            value: cdktn.numberToHclTerraform(struct!.minAdjustmentMagnitude),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        step_adjustments: {
            value: cdktn.listMapperHcl(ccScalingPolicyStepAdjustmentPropertyToHclTerraform, false)(struct!.stepAdjustments),
            isBlock: true,
            type: "set",
            storageClassType: "StepAdjustmentPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyMetricDimensionPropertyToTerraform(struct?: CcScalingPolicy.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyMetricDimensionPropertyToHclTerraform(struct?: CcScalingPolicy.MetricDimensionProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyTargetTrackingMetricDimensionPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyTargetTrackingMetricDimensionPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDimensionProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyTargetTrackingMetricPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyTargetTrackingMetricDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyTargetTrackingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyTargetTrackingMetricDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrackingMetricDimensionPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyTargetTrackingMetricStatPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyTargetTrackingMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyTargetTrackingMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyTargetTrackingMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyTargetTrackingMetricDataQueryPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyTargetTrackingMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyTargetTrackingMetricDataQueryPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyTargetTrackingMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyCustomizedMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.CustomizedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyMetricDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metrics: cdktn.listMapper(ccScalingPolicyTargetTrackingMetricDataQueryPropertyToTerraform, false)(struct!.metrics),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        statistic: cdktn.stringToTerraform(struct!.statistic),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyCustomizedMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.CustomizedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyMetricDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDimensionPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics: {
            value: cdktn.listMapperHcl(ccScalingPolicyTargetTrackingMetricDataQueryPropertyToHclTerraform, false)(struct!.metrics),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrackingMetricDataQueryPropertyList",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredefinedMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.PredefinedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredefinedMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.PredefinedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_metric_specification: ccScalingPolicyCustomizedMetricSpecificationPropertyToTerraform(struct!.customizedMetricSpecification),
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        predefined_metric_specification: ccScalingPolicyPredefinedMetricSpecificationPropertyToTerraform(struct!.predefinedMetricSpecification),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_metric_specification: {
            value: ccScalingPolicyCustomizedMetricSpecificationPropertyToHclTerraform(struct!.customizedMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomizedMetricSpecificationProperty",
        },
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        predefined_metric_specification: {
            value: ccScalingPolicyPredefinedMetricSpecificationPropertyToHclTerraform(struct!.predefinedMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredefinedMetricSpecificationProperty",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScalingPolicy {
export interface PredictiveScalingMetricDimensionProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class PredictiveScalingMetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingMetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class PredictiveScalingMetricDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingMetricDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingMetricDimensionPropertyOutputReference {
        return new PredictiveScalingMetricDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingMetricProperty {
    /**
    * Describes the dimensions of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: PredictiveScalingMetricDimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class PredictiveScalingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new PredictiveScalingMetricDimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: PredictiveScalingMetricDimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface PredictiveScalingMetricStatProperty {
    /**
    * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: PredictiveScalingMetricProperty;
    /**
    * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*. 
    *  The most commonly used metrics for predictive scaling are ``Average`` and ``Sum``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class PredictiveScalingMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new PredictiveScalingMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: PredictiveScalingMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredictiveScalingMetricDataQueryProperty {
    /**
    * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Information about the metric data to return. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: PredictiveScalingMetricStatProperty;
    /**
    * Indicates whether to return the timestamps and raw data values of this metric. 
    *  If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
    *  If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class PredictiveScalingMetricDataQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingMetricDataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricDataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new PredictiveScalingMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: PredictiveScalingMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class PredictiveScalingMetricDataQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingMetricDataQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingMetricDataQueryPropertyOutputReference {
        return new PredictiveScalingMetricDataQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedCapacityMetricProperty {
    /**
    * One or more metric data queries to provide data points for a metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: PredictiveScalingMetricDataQueryProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedCapacityMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new PredictiveScalingMetricDataQueryPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: PredictiveScalingMetricDataQueryProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty {
    /**
    * Describes the dimensions of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty {
    /**
    * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty;
    /**
    * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*. 
    *  The most commonly used metrics for predictive scaling are ``Average`` and ``Sum``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty {
    /**
    * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Information about the metric data to return. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty;
    /**
    * Indicates whether to return the timestamps and raw data values of this metric. 
    *  If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
    *  If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference {
        return new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedLoadMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedLoadMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty {
    /**
    * Describes the dimensions of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty {
    /**
    * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty;
    /**
    * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*. 
    *  The most commonly used metrics for predictive scaling are ``Average`` and ``Sum``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty {
    /**
    * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Information about the metric data to return. 
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty;
    /**
    * Indicates whether to return the timestamps and raw data values of this metric. 
    *  If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
    *  If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference {
        return new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedScalingMetricProperty {
    /**
    * One or more metric data queries to provide data points for a metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedScalingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: PredictiveScalingPolicyConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingPredefinedLoadMetricProperty {
    /**
    * The metric type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * A label that uniquely identifies a target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedLoadMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface PredictiveScalingPredefinedMetricPairProperty {
    /**
    * Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * A label that uniquely identifies a specific target group from which to determine the total and average request count.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedMetricPairPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface PredictiveScalingPredefinedScalingMetricProperty {
    /**
    * The metric type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * A label that uniquely identifies a specific target group from which to determine the average request count.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedScalingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface PredictiveScalingMetricSpecificationProperty {
    /**
    * The customized capacity metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#customized_capacity_metric_specification CcScalingPolicy#customized_capacity_metric_specification}
    */
    readonly customizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetricProperty;
    /**
    * The customized load metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#customized_load_metric_specification CcScalingPolicy#customized_load_metric_specification}
    */
    readonly customizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetricProperty;
    /**
    * The customized scaling metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#customized_scaling_metric_specification CcScalingPolicy#customized_scaling_metric_specification}
    */
    readonly customizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetricProperty;
    /**
    * The predefined load metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_load_metric_specification CcScalingPolicy#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricProperty;
    /**
    * The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_pair_specification CcScalingPolicy#predefined_metric_pair_specification}
    */
    readonly predefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairProperty;
    /**
    * The predefined scaling metric specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_scaling_metric_specification CcScalingPolicy#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricProperty;
    /**
    * Specifies the target utilization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#target_value CcScalingPolicy#target_value}
    */
    readonly targetValue?: number;
}
export class PredictiveScalingMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedCapacityMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedCapacityMetricSpecification = this._customizedCapacityMetricSpecification?.internalValue;
        }
        if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
        }
        if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricPairSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
        }
        if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customizedCapacityMetricSpecification.internalValue = undefined;
            this._customizedLoadMetricSpecification.internalValue = undefined;
            this._customizedScalingMetricSpecification.internalValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predefinedMetricPairSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedCapacityMetricSpecification.internalValue = value.customizedCapacityMetricSpecification;
            this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
            this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
            this._targetValue = value.targetValue;
        }
    }

    // customized_capacity_metric_specification - computed: true, optional: true, required: false
    private _customizedCapacityMetricSpecification = new PredictiveScalingCustomizedCapacityMetricPropertyOutputReference(this, "customized_capacity_metric_specification");
    public get customizedCapacityMetricSpecification() {
        return this._customizedCapacityMetricSpecification;
    }
    public putCustomizedCapacityMetricSpecification(value: PredictiveScalingCustomizedCapacityMetricProperty) {
        this._customizedCapacityMetricSpecification.internalValue = value;
    }
    public resetCustomizedCapacityMetricSpecification() {
        this._customizedCapacityMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedCapacityMetricSpecificationInput() {
        return this._customizedCapacityMetricSpecification.internalValue;
    }

    // customized_load_metric_specification - computed: true, optional: true, required: false
    private _customizedLoadMetricSpecification = new PredictiveScalingCustomizedLoadMetricPropertyOutputReference(this, "customized_load_metric_specification");
    public get customizedLoadMetricSpecification() {
        return this._customizedLoadMetricSpecification;
    }
    public putCustomizedLoadMetricSpecification(value: PredictiveScalingCustomizedLoadMetricProperty) {
        this._customizedLoadMetricSpecification.internalValue = value;
    }
    public resetCustomizedLoadMetricSpecification() {
        this._customizedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedLoadMetricSpecificationInput() {
        return this._customizedLoadMetricSpecification.internalValue;
    }

    // customized_scaling_metric_specification - computed: true, optional: true, required: false
    private _customizedScalingMetricSpecification = new PredictiveScalingCustomizedScalingMetricPropertyOutputReference(this, "customized_scaling_metric_specification");
    public get customizedScalingMetricSpecification() {
        return this._customizedScalingMetricSpecification;
    }
    public putCustomizedScalingMetricSpecification(value: PredictiveScalingCustomizedScalingMetricProperty) {
        this._customizedScalingMetricSpecification.internalValue = value;
    }
    public resetCustomizedScalingMetricSpecification() {
        this._customizedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedScalingMetricSpecificationInput() {
        return this._customizedScalingMetricSpecification.internalValue;
    }

    // predefined_load_metric_specification - computed: true, optional: true, required: false
    private _predefinedLoadMetricSpecification = new PredictiveScalingPredefinedLoadMetricPropertyOutputReference(this, "predefined_load_metric_specification");
    public get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    public putPredefinedLoadMetricSpecification(value: PredictiveScalingPredefinedLoadMetricProperty) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    public resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }

    // predefined_metric_pair_specification - computed: true, optional: true, required: false
    private _predefinedMetricPairSpecification = new PredictiveScalingPredefinedMetricPairPropertyOutputReference(this, "predefined_metric_pair_specification");
    public get predefinedMetricPairSpecification() {
        return this._predefinedMetricPairSpecification;
    }
    public putPredefinedMetricPairSpecification(value: PredictiveScalingPredefinedMetricPairProperty) {
        this._predefinedMetricPairSpecification.internalValue = value;
    }
    public resetPredefinedMetricPairSpecification() {
        this._predefinedMetricPairSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricPairSpecificationInput() {
        return this._predefinedMetricPairSpecification.internalValue;
    }

    // predefined_scaling_metric_specification - computed: true, optional: true, required: false
    private _predefinedScalingMetricSpecification = new PredictiveScalingPredefinedScalingMetricPropertyOutputReference(this, "predefined_scaling_metric_specification");
    public get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    public putPredefinedScalingMetricSpecification(value: PredictiveScalingPredefinedScalingMetricProperty) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    public resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}

export class PredictiveScalingMetricSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingMetricSpecificationPropertyOutputReference {
        return new PredictiveScalingMetricSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingPolicyConfigurationProperty {
    /**
    * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to ``HonorMaxCapacity`` if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#max_capacity_breach_behavior CcScalingPolicy#max_capacity_breach_behavior}
    */
    readonly maxCapacityBreachBehavior?: string;
    /**
    * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55. 
    *  Required if the ``MaxCapacityBreachBehavior`` property is set to ``IncreaseMaxCapacity``, and cannot be used otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#max_capacity_buffer CcScalingPolicy#max_capacity_buffer}
    */
    readonly maxCapacityBuffer?: number;
    /**
    * This structure includes the metrics and target utilization to use for predictive scaling. 
    *  This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_specifications CcScalingPolicy#metric_specifications}
    */
    readonly metricSpecifications?: PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The predictive scaling mode. Defaults to ``ForecastOnly`` if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#mode CcScalingPolicy#mode}
    */
    readonly mode?: string;
    /**
    * The amount of time, in seconds, that the start time can be advanced. 
    *  The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scheduling_buffer_time CcScalingPolicy#scheduling_buffer_time}
    */
    readonly schedulingBufferTime?: number;
}
export class PredictiveScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacityBreachBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
        }
        if (this._maxCapacityBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
        }
        if (this._metricSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSpecifications = this._metricSpecifications?.internalValue;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._schedulingBufferTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacityBreachBehavior = undefined;
            this._maxCapacityBuffer = undefined;
            this._metricSpecifications.internalValue = undefined;
            this._mode = undefined;
            this._schedulingBufferTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
            this._maxCapacityBuffer = value.maxCapacityBuffer;
            this._metricSpecifications.internalValue = value.metricSpecifications;
            this._mode = value.mode;
            this._schedulingBufferTime = value.schedulingBufferTime;
        }
    }

    // max_capacity_breach_behavior - computed: true, optional: true, required: false
    private _maxCapacityBreachBehavior?: string; 
    public get maxCapacityBreachBehavior() {
        return this.getStringAttribute('max_capacity_breach_behavior');
    }
    public set maxCapacityBreachBehavior(value: string) {
        this._maxCapacityBreachBehavior = value;
    }
    public resetMaxCapacityBreachBehavior() {
        this._maxCapacityBreachBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityBreachBehaviorInput() {
        return this._maxCapacityBreachBehavior;
    }

    // max_capacity_buffer - computed: true, optional: true, required: false
    private _maxCapacityBuffer?: number; 
    public get maxCapacityBuffer() {
        return this.getNumberAttribute('max_capacity_buffer');
    }
    public set maxCapacityBuffer(value: number) {
        this._maxCapacityBuffer = value;
    }
    public resetMaxCapacityBuffer() {
        this._maxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityBufferInput() {
        return this._maxCapacityBuffer;
    }

    // metric_specifications - computed: true, optional: true, required: false
    private _metricSpecifications = new PredictiveScalingMetricSpecificationPropertyList(this, "metric_specifications", true);
    public get metricSpecifications() {
        return this._metricSpecifications;
    }
    public putMetricSpecifications(value: PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable) {
        this._metricSpecifications.internalValue = value;
    }
    public resetMetricSpecifications() {
        this._metricSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSpecificationsInput() {
        return this._metricSpecifications.internalValue;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // scheduling_buffer_time - computed: true, optional: true, required: false
    private _schedulingBufferTime?: number; 
    public get schedulingBufferTime() {
        return this.getNumberAttribute('scheduling_buffer_time');
    }
    public set schedulingBufferTime(value: number) {
        this._schedulingBufferTime = value;
    }
    public resetSchedulingBufferTime() {
        this._schedulingBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingBufferTimeInput() {
        return this._schedulingBufferTime;
    }
}
export interface StepAdjustmentProperty {
    /**
    * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
    *  You must specify at least one upper or lower bound.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_interval_lower_bound CcScalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: number;
    /**
    * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
    *  You must specify at least one upper or lower bound.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_interval_upper_bound CcScalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: number;
    /**
    * The amount by which to scale. The adjustment is based on the value that you specified in the ``AdjustmentType`` property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scaling_adjustment CcScalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
}
export class StepAdjustmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StepAdjustmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricIntervalLowerBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
        }
        if (this._metricIntervalUpperBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
        }
        if (this._scalingAdjustment !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingAdjustment = this._scalingAdjustment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepAdjustmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = undefined;
            this._metricIntervalUpperBound = undefined;
            this._scalingAdjustment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = value.metricIntervalLowerBound;
            this._metricIntervalUpperBound = value.metricIntervalUpperBound;
            this._scalingAdjustment = value.scalingAdjustment;
        }
    }

    // metric_interval_lower_bound - computed: true, optional: true, required: false
    private _metricIntervalLowerBound?: number; 
    public get metricIntervalLowerBound() {
        return this.getNumberAttribute('metric_interval_lower_bound');
    }
    public set metricIntervalLowerBound(value: number) {
        this._metricIntervalLowerBound = value;
    }
    public resetMetricIntervalLowerBound() {
        this._metricIntervalLowerBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricIntervalLowerBoundInput() {
        return this._metricIntervalLowerBound;
    }

    // metric_interval_upper_bound - computed: true, optional: true, required: false
    private _metricIntervalUpperBound?: number; 
    public get metricIntervalUpperBound() {
        return this.getNumberAttribute('metric_interval_upper_bound');
    }
    public set metricIntervalUpperBound(value: number) {
        this._metricIntervalUpperBound = value;
    }
    public resetMetricIntervalUpperBound() {
        this._metricIntervalUpperBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricIntervalUpperBoundInput() {
        return this._metricIntervalUpperBound;
    }

    // scaling_adjustment - computed: true, optional: true, required: false
    private _scalingAdjustment?: number; 
    public get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    public set scalingAdjustment(value: number) {
        this._scalingAdjustment = value;
    }
    public resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
}

export class StepAdjustmentPropertyList extends cdktn.ComplexList {
    public internalValue? : StepAdjustmentProperty[] | cdktn.IResolvable

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
    public get(index: number): StepAdjustmentPropertyOutputReference {
        return new StepAdjustmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StepScalingPolicyConfigurationProperty {
    /**
    * Specifies whether the ``ScalingAdjustment`` value in the ``StepAdjustment`` property is an absolute number or a percentage of the current capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#adjustment_type CcScalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see [Cooldown period](https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown) in the *Application Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#cooldown CcScalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * The aggregation type for the CloudWatch metrics. Valid values are ``Minimum``, ``Maximum``, and ``Average``. If the aggregation type is null, the value is treated as ``Average``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_aggregation_type CcScalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * The minimum value to scale by when the adjustment type is ``PercentChangeInCapacity``. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a ``MinAdjustmentMagnitude`` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a ``MinAdjustmentMagnitude`` of 2, Application Auto Scaling scales out the service by 2 tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#min_adjustment_magnitude CcScalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * A set of adjustments that enable you to scale based on the size of the alarm breach.
    *  At least one step adjustment is required if you are adding a new step scaling policy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#step_adjustments CcScalingPolicy#step_adjustments}
    */
    readonly stepAdjustments?: StepAdjustmentProperty[] | cdktn.IResolvable;
}
export class StepScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adjustmentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.adjustmentType = this._adjustmentType;
        }
        if (this._cooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldown = this._cooldown;
        }
        if (this._metricAggregationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricAggregationType = this._metricAggregationType;
        }
        if (this._minAdjustmentMagnitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.minAdjustmentMagnitude = this._minAdjustmentMagnitude;
        }
        if (this._stepAdjustments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepAdjustments = this._stepAdjustments?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adjustmentType = undefined;
            this._cooldown = undefined;
            this._metricAggregationType = undefined;
            this._minAdjustmentMagnitude = undefined;
            this._stepAdjustments.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adjustmentType = value.adjustmentType;
            this._cooldown = value.cooldown;
            this._metricAggregationType = value.metricAggregationType;
            this._minAdjustmentMagnitude = value.minAdjustmentMagnitude;
            this._stepAdjustments.internalValue = value.stepAdjustments;
        }
    }

    // adjustment_type - computed: true, optional: true, required: false
    private _adjustmentType?: string; 
    public get adjustmentType() {
        return this.getStringAttribute('adjustment_type');
    }
    public set adjustmentType(value: string) {
        this._adjustmentType = value;
    }
    public resetAdjustmentType() {
        this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adjustmentTypeInput() {
        return this._adjustmentType;
    }

    // cooldown - computed: true, optional: true, required: false
    private _cooldown?: number; 
    public get cooldown() {
        return this.getNumberAttribute('cooldown');
    }
    public set cooldown(value: number) {
        this._cooldown = value;
    }
    public resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInput() {
        return this._cooldown;
    }

    // metric_aggregation_type - computed: true, optional: true, required: false
    private _metricAggregationType?: string; 
    public get metricAggregationType() {
        return this.getStringAttribute('metric_aggregation_type');
    }
    public set metricAggregationType(value: string) {
        this._metricAggregationType = value;
    }
    public resetMetricAggregationType() {
        this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricAggregationTypeInput() {
        return this._metricAggregationType;
    }

    // min_adjustment_magnitude - computed: true, optional: true, required: false
    private _minAdjustmentMagnitude?: number; 
    public get minAdjustmentMagnitude() {
        return this.getNumberAttribute('min_adjustment_magnitude');
    }
    public set minAdjustmentMagnitude(value: number) {
        this._minAdjustmentMagnitude = value;
    }
    public resetMinAdjustmentMagnitude() {
        this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minAdjustmentMagnitudeInput() {
        return this._minAdjustmentMagnitude;
    }

    // step_adjustments - computed: true, optional: true, required: false
    private _stepAdjustments = new StepAdjustmentPropertyList(this, "step_adjustments", true);
    public get stepAdjustments() {
        return this._stepAdjustments;
    }
    public putStepAdjustments(value: StepAdjustmentProperty[] | cdktn.IResolvable) {
        this._stepAdjustments.internalValue = value;
    }
    public resetStepAdjustments() {
        this._stepAdjustments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepAdjustmentsInput() {
        return this._stepAdjustments.internalValue;
    }
}
export interface MetricDimensionProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class MetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class MetricDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDimensionPropertyOutputReference {
        return new MetricDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTrackingMetricDimensionProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class TargetTrackingMetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingMetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class TargetTrackingMetricDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingMetricDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingMetricDimensionPropertyOutputReference {
        return new TargetTrackingMetricDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTrackingMetricProperty {
    /**
    * The dimensions for the metric. For the list of available dimensions, see the AWS documentation available from the table in [services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*. 
    *  Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: TargetTrackingMetricDimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric. For more information, see the table in [services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class TargetTrackingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new TargetTrackingMetricDimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: TargetTrackingMetricDimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface TargetTrackingMetricStatProperty {
    /**
    * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: TargetTrackingMetricProperty;
    /**
    * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
    *  The most commonly used metric for scaling is ``Average``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class TargetTrackingMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new TargetTrackingMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: TargetTrackingMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface TargetTrackingMetricDataQueryProperty {
    /**
    * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
    *  Conditional: Within each ``TargetTrackingMetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Information about the metric data to return.
    *  Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: TargetTrackingMetricStatProperty;
    /**
    * Indicates whether to return the timestamps and raw data values of this metric. 
    *  If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
    *  If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class TargetTrackingMetricDataQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingMetricDataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricDataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new TargetTrackingMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: TargetTrackingMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class TargetTrackingMetricDataQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingMetricDataQueryPropertyOutputReference {
        return new TargetTrackingMetricDataQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomizedMetricSpecificationProperty {
    /**
    * The dimensions of the metric. 
    *  Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: MetricDimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that's returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#metrics CcScalingPolicy#metrics}
    */
    readonly metrics?: TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
    /**
    * The statistic of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#statistic CcScalingPolicy#statistic}
    */
    readonly statistic?: string;
    /**
    * The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class CustomizedMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizedMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics?.internalValue;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomizedMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._metrics.internalValue = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._metrics.internalValue = value.metrics;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new MetricDimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: MetricDimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // metrics - computed: true, optional: true, required: false
    private _metrics = new TargetTrackingMetricDataQueryPropertyList(this, "metrics", false);
    public get metrics() {
        return this._metrics;
    }
    public putMetrics(value: TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable) {
        this._metrics.internalValue = value;
    }
    public resetMetrics() {
        this._metrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsInput() {
        return this._metrics.internalValue;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // statistic - computed: true, optional: true, required: false
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    public resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredefinedMetricSpecificationProperty {
    /**
    * The metric type. The ``ALBRequestCountPerTarget`` metric type applies only to Spot fleet requests and ECS services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ``ALBRequestCountPerTarget`` and there is a target group attached to the Spot Fleet or ECS service.
    *  You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
    *  ``app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff``.
    *  Where:
    *   +  app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
    *   +  targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
    *   
    *  To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredefinedMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredefinedMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredefinedMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface TargetTrackingScalingPolicyConfigurationProperty {
    /**
    * A customized metric. You can specify either a predefined metric or a customized metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#customized_metric_specification CcScalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: CustomizedMetricSpecificationProperty;
    /**
    * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is ``true``, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#disable_scale_in CcScalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * A predefined metric. You can specify either a predefined metric or a customized metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#predefined_metric_specification CcScalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: PredefinedMetricSpecificationProperty;
    /**
    * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scale_in_cooldown CcScalingPolicy#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#scale_out_cooldown CcScalingPolicy#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scaling_policy#target_value CcScalingPolicy#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
        }
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._predefinedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customizedMetricSpecification.internalValue = undefined;
            this._disableScaleIn = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
            this._disableScaleIn = value.disableScaleIn;
            this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // customized_metric_specification - computed: true, optional: true, required: false
    private _customizedMetricSpecification = new CustomizedMetricSpecificationPropertyOutputReference(this, "customized_metric_specification");
    public get customizedMetricSpecification() {
        return this._customizedMetricSpecification;
    }
    public putCustomizedMetricSpecification(value: CustomizedMetricSpecificationProperty) {
        this._customizedMetricSpecification.internalValue = value;
    }
    public resetCustomizedMetricSpecification() {
        this._customizedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedMetricSpecificationInput() {
        return this._customizedMetricSpecification.internalValue;
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // predefined_metric_specification - computed: true, optional: true, required: false
    private _predefinedMetricSpecification = new PredefinedMetricSpecificationPropertyOutputReference(this, "predefined_metric_specification");
    public get predefinedMetricSpecification() {
        return this._predefinedMetricSpecification;
    }
    public putPredefinedMetricSpecification(value: PredefinedMetricSpecificationProperty) {
        this._predefinedMetricSpecification.internalValue = value;
    }
    public resetPredefinedMetricSpecification() {
        this._predefinedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricSpecificationInput() {
        return this._predefinedMetricSpecification.internalValue;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}
}
